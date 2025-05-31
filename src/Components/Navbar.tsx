import { useNavigate } from "react-router"
import LogoBCA from "../assets/Logo-BCA.png"
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
    let navigate = useNavigate()

    return (
        <div className="navbar border-b-2 border-black">
            <div className="inner-navbar max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="img h-15 w-20" onClick={() => navigate("/")}>
                    <img src={LogoBCA} className="w-full h-full" alt="" />
                </div>

                <div className="option list-none items-center flex gap-4">
                    <li className="ease-anim list-anim" style={{"--color":'black'} as  React.CSSProperties}>Aplikasi Online</li>
                    <li className="ease-anim list-anim" style={{"--color":'black'} as  React.CSSProperties}>BCA Mobile</li>
                    <li className="ease-anim list-anim" style={{"--color":'black'} as  React.CSSProperties}>Tips Keamanan Perbankan</li>

                    <div className="language font-bold ">
                        <span className="list-anim text-gray-500" style={{"--color":'black'} as  React.CSSProperties}>EN</span>
                        <span className="mx-1.5">|</span>
                        <span className="list-anim" style={{"--color":'black'} as  React.CSSProperties}>ID</span>
                    </div>
                    
                    <div className="search bg-gray-200 flex gap-3 items-center py-2 px-4 rounded-[5px]">
                        <IoMdSearch />
                        <input type="text" placeholder="Perlu Bantuan?" className="outline-0"/>
                    </div>

                    <button className="download-button secondary-button">
                       UNDUH
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar