import OptionButton from "@/Components/OptionButton"
import { useState } from "react";
import { Outlet, useNavigate } from "react-router"

const LoggedIn = () => {
  const navigate = useNavigate();
  const [active, SetActive] = useState<string>();

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

          
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LoggedIn