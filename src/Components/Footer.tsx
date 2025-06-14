import LogoBCAWhite from "../assets/Logo-BCA-White.png"
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { LiaInstagram } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoArrowForward } from "react-icons/io5";
import AppStoreBtn from "../assets/AppStore_Button.png"
import GooglePlayBtn from "../assets/GooglePlay_Button.png"

const Footer = () => {
    return (
        <div className="footer bg-primary-black text-white">
            <div className="inner-footer py-14 max-w-[1440px] mx-auto">
                <div className="img w-23 h-10">
                    <img src={LogoBCAWhite} alt="" className="w-full h-full" />
                </div>

                <div className="flex justify-between mt-4">
                    <div className="grid grid-cols-[repeat(3,auto)] gap-5">
                        <div className="kantor-pusat">
                            <p className="font-semibold">Kantor Pusat</p>
                            <p className="mt-5">Menara BCA, Grand Indonesia</p>
                            <p className="mt-5">Jl.MH Thamrin No.1 Jakarta 10310</p>
                            <div className="phone flex gap-2 mt-5 items-center " >
                                <span><HiOutlineLocationMarker /></span>
                                <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>Lokasi BCA Lainnya</p>
                            </div>
                        </div>
                        <div className="hubungi-kami">
                            <p className="font-semibold">Hubungi Kami</p>
                            <div className="phone flex gap-2 mt-5 items-center">
                                <span><MdLocalPhone /></span>
                                <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>Halo BCA 1500888</p>
                            </div>
                            <div className="email flex gap-2 mt-5 items-center">
                                <span><MdOutlineEmail /></span>
                                <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>halobca@bca.co.id</p>
                            </div>
                            <div className="whatsapp flex gap-2 mt-5 items-center">
                                <span><PiWhatsappLogoLight /></span>
                                <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>62 811 1500 998</p>
                            </div>
                        </div>
                        <div className="media-sosial">
                            <p className="font-semibold">Media Sosial</p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="facebook flex mt-5 gap-2 items-center">
                                        <span><FaFacebook /></span>
                                        <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>GoodLife BCA</p>
                                    </div>
                                    <div className="instagram flex mt-5 gap-2 items-center">
                                        <span><LiaInstagram /></span>
                                        <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>@goodlifebca</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="youtube flex gap-2 mt-5 items-center">
                                        <span><FaYoutube /></span>
                                        <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>Solusi BCA</p>
                                    </div>
                                    <div className="X flex gap-2 mt-5 items-center">
                                        <span><BsTwitterX /></span>
                                        <p className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>@BankBCA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Dapatkan promo dan penawaran terbaik dari BCA</p>
                        <div className="flex my-3 items-center gap-2">
                            <input type="text" className="input-text" placeholder="Masukan Email" />
                            <IoArrowForward />
                        </div>
                        <p className="text-sm">This site is protected by reCAPTCHA and the Google <u>Privacy Policy</u> and <u>Terms of Service</u> apply.</p>
                        <p className="mt-5">Unduh aplikasi di sini:</p>
                        <div className="flex gap-3 mt-3">
                            <div className="img w-[10em] h-[3em]">
                                <img src={AppStoreBtn} alt="" className="w-full h-full"/>
                            </div>
                            <div className="img w-[10em] h-[3em]">
                                <img src={GooglePlayBtn} alt=""  className="w-full h-full"/>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-9"></hr>

                <div className="flex text-sm justify-between items-center">
                    <p className="w-[30%]">BCA berizin dan diawasi oleh Otoritas Jasa Keuangan & Bank Indonesia</p>
                    <p className="w-[30%]">BCA merupakan peserta penjaminan LPS. Maksimum nilai simpanan yang dijamin LPS per Nasabah per Bank adalah Rp2 miliar. Untuk cek Tingkat Bunga Penjaminan LPS, klik <a className="text-blue-600 underline" target="_blank" href="https://apps.lps.go.id/BankPesertaLPSRate">di sini</a>.</p>
                    <div className="flex gap-2">
                        <span className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>SBDK</span>
                        <span>|</span>
                        <span className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>Kebijakan</span>
                        <span>|</span>
                        <span className="list-anim" style={{ "--color": "white" } as React.CSSProperties}>Syarat dan Ketentuan</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer