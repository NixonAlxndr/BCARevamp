import { useNavigate } from "react-router"
import LogoBCA from "../assets/Logo-BCA.png"
import { IoMdSearch } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import PrimaryButton from "./PrimaryButton";

const NavbarSecondary = () => {
    let navigate = useNavigate()

    return (
        <div className="navbar border-b-2 border-black">
            <div className="inner-navbar max-w-[1440px] mx-auto flex items-center justify-between">
                <div className="img h-15 w-20" onClick={() => navigate("/")}>
                    <img src={LogoBCA} className="w-full h-full cursor-pointer" alt="" />
                </div>

                <div className="option list-none items-center flex gap-4.5">
                    <DropdownMenu>
                        <DropdownMenuTrigger>Fitur</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <li className="ease-anim list-anim" style={{ "--color": 'black' } as React.CSSProperties}>BCA Mobile</li>

                    <div className="language font-bold ">
                        <span className="list-anim text-gray-500" style={{ "--color": 'black' } as React.CSSProperties}>EN</span>
                        <span className="mx-1.5">|</span>
                        <span className="list-anim" style={{ "--color": 'black' } as React.CSSProperties}>ID</span>
                    </div>

                    <div className="search bg-gray-200 flex gap-3 text-sm items-center py-2 px-4 rounded-[5px]">
                        <IoMdSearch size={20} color="gray"/>
                        <input type="text" placeholder="Perlu Bantuan?" className="outline-0" />
                    </div>

                    <PrimaryButton text="Keluar" classExtend="bg-primary-blue rounded-[5px] font-semibold hover:bg-secondary-blue px-4"/>
                </div>
            </div>
        </div>
    )
}

export default NavbarSecondary