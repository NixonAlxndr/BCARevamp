import OptionButton from "@/Components/OptionButton"
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router"

const LoggedIn = () => {
  const navigate = useNavigate();
  const [active, SetActive] = useState<string>();

  useEffect(() => {
    console.log
  }, [active])

  return (
    <>
      <div className="grow grid grid-cols-[300px_1fr]">
        <div className="bg-primary-blue flex flex-col font-semibold text-white justify-around px-2 py-4">
          <OptionButton
            id="Payment"
            activeButtonId={active}
            text="Payment"
            classExtend="text-white py-2 px-3"
            onClick={() => {
              navigate("Payment")
              SetActive("Payment")
            }}
            dropDown
          >

            <OptionButton
              id="RechargeVoucher"
              activeButtonId={active}
              onClick={() => SetActive("RechargeVoucher")}
              text="Recharge Voucher"
              classExtend="text-white py-2 px-3"
            />

            <OptionButton
              id="PLNPrabayar"
              activeButtonId={active}
              onClick={() => SetActive("PLNPrabayar")}
              text="PLN Prabayar"
              classExtend="text-white py-2 px-3 "
            />

            <OptionButton
              id="PLNManual"
              activeButtonId={active}
              onClick={() => SetActive("PLNManual")}
              text="PLN Prabayar Manual Advice"
              classExtend="text-white py-2 px-3 "
            />

            <OptionButton
              id="Ticket"
              activeButtonId={active}
              onClick={() => SetActive("Ticket")}
              text="Ticket"
              classExtend="text-white py-2 px-3 "
            />

          </OptionButton>

          <OptionButton
            id="e-Commerce"
            activeButtonId={active}
            text="e-Commerce"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("eCommerce")
              SetActive("e-Commerce")
            }}
          >
          </OptionButton>

          <OptionButton
            id="FundTransfer"
            activeButtonId={active}
            text="Fund Transfer"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("FundTransfer")
              SetActive("FundTransfer")
            }}
          >

          </OptionButton>
          <OptionButton
            id="AccountOpening"
            activeButtonId={active}
            text="Account Opening"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("AccountOpening")
              SetActive("AccountOpening")
            }}
          >

          </OptionButton>

          <OptionButton
            id="CreditCard"
            activeButtonId={active}
            text="Credit Card"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("CreditCard")
              SetActive("CreditCard")
            }}
          >

          </OptionButton>

          <OptionButton
            id="InvesmentProduct"
            activeButtonId={active}
            text="Invesment Product"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("InvesmentProduct")
              SetActive("InvesmentProduct")
            }}
          >

          </OptionButton>

          <OptionButton
            id="eStatement"
            activeButtonId={active}
            text="e-Statement"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("eStatement")
              SetActive("eStatement")
            }}
            dropDown
          >
            <OptionButton id="Test" activeButtonId={active} onClick={() => SetActive('Test')} text="test" classExtend="text-white py-2 px-3"/>
          </OptionButton>

          <OptionButton
            id="AccountInformation"
            activeButtonId={active}
            text="Account Information"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("AccountInformation")
              SetActive("AccountInformation")
            }}
          >

          </OptionButton>

          <OptionButton
            id="ConsumerInformation"
            activeButtonId={active}
            text="Consumer Credit Information"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("ConsumerInformation")
              SetActive("ConsumerInformation")
            }}
          >

          </OptionButton>

          <OptionButton
            id="OtherInformation"
            activeButtonId={active}
            text="Other Information"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("OtherInformation")
              SetActive("OtherInformation")
            }}
          >

          </OptionButton>

          <OptionButton
            id="TransactionStatus"
            activeButtonId={active}
            text="Transaction Status"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("TransactionStatus")
              SetActive("TransactionStatus")
            }}
          >

          </OptionButton>

          <OptionButton
            id="TransactionHistory"
            activeButtonId={active}
            text="Transaction History"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("TransactionHistory")
              SetActive("TransactionHistory")
            }}
          >

          </OptionButton>

          <OptionButton
            id="Administration"
            activeButtonId={active}
            text="Administration"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("Administration")
              SetActive("Administration")
            }}
          >

          </OptionButton>

          <OptionButton
            id="E-Mail"
            activeButtonId={active}
            text="E-Mail"
            classExtend="text-white py-2 px-3 "
            onClick={() => {
              navigate("eMail")
              SetActive("E-Mail")
            }}
          >

          </OptionButton>

          <OptionButton
            id="Home"
            text="Home"
            activeButtonId={active}
            onClick={() => {
              navigate("/")
              SetActive("Home")
            }}
            classExtend="text-white py-2 px-3 flex" />
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LoggedIn