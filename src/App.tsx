import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import LoggedInLayout from "./Layout/LoggedInLayout";
import LoggedIn from "./Pages/LoggedIn";
import Payment from "./Pages/Payment";
import eCommerce from "./Pages/eCommerce";
import FundTransfer from "./Pages/FundTransfer";
import AccountOpening from "./Pages/AccountOpening";
import CreditCard from "./Pages/CreditCard";
import InvesmentProduct from "./Pages/InvesmentProduct";
import eStatement from "./Pages/eStatement";
import AccountInformation from "./Pages/AccountInformation";
import ConsumerInformation from "./Pages/ConsumerInformation";
import OtherInformation from "./Pages/OtherInformation";
import TransactionStatus from "./Pages/TransactionStatus";
import TransactionHistory from "./Pages/TransactionHistory";
import Administration from "./Pages/Administration";
import eMail from "./Pages/eMail";
import DummyPage from "./Pages/DummyPage";


let router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login/:type",
        Component: Login
      }
    ]
  },
  {
    path: "/:userId",
    Component: LoggedInLayout,
    children: [
      {
        path: "services",
        Component: LoggedIn,
        children: [
          {
            path: "Payment",
            Component: Payment
          },
          {
            path: "eCommerce",
            Component: eCommerce
          },
          {
            path: "FundTransfer",
            Component: FundTransfer
          },
          {
            path: "AccountOpening",
            Component: AccountOpening
          },
          {
            path: "CreditCard",
            Component: CreditCard
          },
          {
            path: "InvesmentProduct",
            Component: InvesmentProduct
          },
          {
            path: "eStatement",
            Component: eStatement
          },
          {
            path: "AccountInformation",
            Component: AccountInformation
          },
          {
            path: "ConsumerInformation",
            Component: ConsumerInformation
          },
          {
            path: "OtherInformation",
            Component: OtherInformation
          },
          {
            path: "TransactionStatus",
            Component: TransactionStatus
          },
          {
            path: "TransactionHistory",
            Component: TransactionHistory
          },
          {
            path: "Administration",
            Component: Administration
          },
          {
            path: "eMail",
            Component: eMail
          }
        ]
      },
    ]
  },
  {
    path: "*",
    Component: DummyPage
  }
]);


const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App