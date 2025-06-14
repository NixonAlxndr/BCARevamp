import PrimaryButton from "@/Components/PrimaryButton"
import RadioButton from "@/Components/RadioButton"
import { Calendar } from "@/Components/ui/calendar"
import { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@radix-ui/react-popover"
import { Button } from "@/Components/ui/button"
import type { DateRange, SelectSingleEventHandler } from "react-day-picker"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"

const TransactionHistory = () => {
  const transactionOption: Record<number, string> = {
    1: "Transfer ke akun BCA",
    2: "Transfer ke akun bank BCA domestik",
    3: "Transfer ke akun BCA virtual",
    4: "Transfer ke Sakuku",
    5: "Pembayaran",
    6: "Pembayaran e-Commerce",
    7: "Struk penarikan dana",
    8: "Pengiriman uang keluar",
  }

  const [transactionType, setTransactionType] = useState<number>(1);
  const [transaction, SetTransaction] = useState<"Typed" | "All">("All")
  const [dateNow, SetDateNow] = useState<Date | undefined>(undefined)
  const [dateLater, SetDateLater] = useState<Date | undefined>(undefined)

  const matcher: DateRange = {
    from: dateNow,
    to: dateLater
  };

  return (
    <div className="py-3 w-[50%] mx-auto">
      <p className="text-6xl font-semibold text-secondary-blue">Transaction History</p>
      <p className="mt-2">Pilih periode yang anda inginkan untuk melihat transaksi BCA Anda</p>

      <div className="periode mt-5 flex gap-5">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm">Dari:</p>
            <Popover>
              <PopoverTrigger>
                <Button variant={"outline"} className="bg-transparent font-normal text-black hover:bg-gray-200">{dateNow ? dateNow.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "Pilih tanggal"}</Button>
              </PopoverTrigger>
              <PopoverContent className="z-20 mt-2">
                <Calendar 
                  disabled={date => date > new Date() || date < new Date("1900-01-01")} 
                  mode="single" selected={dateNow} 
                  onSelect={SetDateNow as SelectSingleEventHandler} 
                  className="bg-white border-gray-200 border-2 rounded-lg" />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <p className="text-sm">Sampai:</p>
            <Popover>
              <PopoverTrigger>
                <Button variant={"outline"} className="bg-transparent font-normal text-black hover:bg-gray-200">{dateLater ? dateLater.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) : "Pilih tanggal"}</Button>
              </PopoverTrigger>
              <PopoverContent className="z-20 mt-2">
                <Calendar 
                  disabled={date => date > new Date() || date < new Date("1900-01-01")} 
                  mode="single" selected={dateLater} 
                  onSelect={SetDateLater as SelectSingleEventHandler} 
                  className="bg-white border-gray-200 border-2 rounded-lg" />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="calendar w-fit">
          <Calendar 
            disabled={date => date > new Date() || date < new Date("1900-01-01")} 
            mode="range" selected={matcher} 
            className="bg-white border-gray-200 border-2 rounded-lg" 
            classNames={{day_today: "bg-transparent"}}/>
        </div>
      </div>


      <div className="transaction mt-5">
        <p className="mt-2">Pilih tipe transaksi apa yang ingin anda lihat</p>
        <div className="all mt-1">
          <RadioButton text="Semua Transaksi" id="All" state={transaction} onClick={() => SetTransaction("All")} />
        </div>

        <div className="typed flex gap-24">
          <RadioButton text="Tipe Transaksi" id="Typed" state={transaction} onClick={() => SetTransaction("Typed")} />

          <DropdownMenu>
            <DropdownMenuTrigger disabled={transaction === "All"}>
              <Button disabled={transaction === "All"} className="font-normal" variant={"outline"}>{transactionOption[transactionType]}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setTransactionType(1)}>Transfer ke akun BCA</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(2)}>Transfer ke akun bank BCA domestik</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(3)}>Transfer ke akun BCA virtual</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(4)}>Transfer ke Sakuku</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(5)}>Pembayaran</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(6)}>Pembayaran e-Commerce</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(7)}>Struk penarikan dana</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTransactionType(8)}>Pengiriman uang keluar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="warning mt-4">
        <p className="text-red-500"><b>Note:</b> Semua transaksi hanya bisa dilihat dalam jangka waktu 31 hari kebelakang</p>
      </div>

      <div className="submit-button">
        <PrimaryButton text="Lihat" classExtend="bg-primary-blue w-min px-8 mt-6 hover:bg-secondary-blue justify-self-end" />
      </div>
    </div>
  )
}

export default TransactionHistory