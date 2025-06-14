import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export type LayoutContextType = {
  popUp: boolean;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type: "Individual" | "Bisnis" | null;
  setType: React.Dispatch<React.SetStateAction<"Individual" | "Bisnis" | null>>;
};

const DefaultLayout = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState<"Individual" | "Bisnis" | null>("Bisnis");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setPopUp={setPopUp}/>
      <Outlet
        context={{
          popUp,
          setPopUp,
          isVisible,
          setIsVisible,
          type,
          setType,
        }}
      />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
