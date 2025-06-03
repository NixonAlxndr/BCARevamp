import { useNavigate } from "react-router"
import LogoBCA from "../assets/Logo-BCA.png"
import { IoMdSearch } from "react-icons/io";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
    let navigate = useNavigate()

    return (
        <div className="navbar shadow-2xl fixed z-20 right-0 left-0 bg-white">
            <div className="inner-navbar max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="img h-18 w-24 cursor-pointer" onClick={() => navigate("/")}>
                    <img src={LogoBCA} className="w-full h-full" alt="" />
                </div>

                <div className="option list-none items-center flex gap-4.5">
                    <li className="ease-anim list-anim" style={{"--color":'black'} as  React.CSSProperties}>Aplikasi Online</li>
                    <li className="ease-anim list-anim" style={{"--color":'black'} as  React.CSSProperties}>BCA Mobile</li>
                    <li className="ease-anim list-anim" style={{"--color":'black'} as  React.CSSProperties}>Tips Keamanan Perbankan</li>

                    <div className="language font-bold ">
                        <span className="list-anim text-gray-500" style={{"--color":'black'} as  React.CSSProperties}>EN</span>
                        <span className="mx-1.5">|</span>
                        <span className="list-anim" style={{"--color":'black'} as  React.CSSProperties}>ID</span>
                    </div>
                    
                    <div className="search bg-gray-200 flex gap-3 text-sm items-center py-2 px-4 rounded-[5px]">
                        <IoMdSearch size={20} color="gray"/>
                        <input type="text" placeholder="Perlu Bantuan?" className="outline-0"/>
                    </div>

                    <PrimaryButton text="Unduh" classExtend="bg-primary-blue rounded-[5px] font-semibold hover:bg-secondary-blue px-4"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar