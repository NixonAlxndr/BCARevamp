import { useEffect, useRef, useState } from "react"
import HeroImg1 from "../assets/Hero-img-1.jpg"
import GroupPP from "../assets/Group-PP.png"
import IndividualPP from "../assets/Individual-PP.png"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useNavigate } from "react-router"

const Home = () => {
  const [popUp, setPopUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (popUp) {
      setIsVisible(true);
    } else if (popupRef.current) {
      gsap.to(popupRef.current, {
        opacity: 0,
        y: 100,
        duration: 0.5,
        onComplete: () => setIsVisible(false),
      });
    }
  }, [popUp]);

  useGSAP(() => {
    if (isVisible && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopUp(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="max-w-[1440px] mx-auto my-20 px-4">
      {isVisible && (
        <div
          ref={popupRef}
          className="popup fixed z-10 left-0 bottom-0 right-0 bg-primary py-4 text-white"
        >
          <h1 className="text-3xl text-center font-bold">Masuk Sebagai</h1>
          <div className="flex justify-between w-[60%] mx-auto my-7">
            <div className="bisnis cursor-pointer" onClick={() => navigate("/login/bisnis")}>
              <div className="img w-[17em] h-[10em] my-2">
                <img src={GroupPP} alt="" className="w-full h-full" />
              </div>
              <p className="text-[1.4rem] text-black font-semibold">Bisnis</p>
            </div>
            <div className="individual cursor-pointer" onClick={() => navigate("/login/individu")}>
              <div className="img w-[8em] h-[10em] my-2">
                <img src={IndividualPP} alt="" className="w-full h-full" />
              </div>
              <p className="text-[1.4rem] text-black font-semibold">Individual</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="text w-[50%]">
          <h1 className="font-bold text-6xl">Senantiasa di<br /> Hati Anda</h1>

          <p className="my-3.5">
            Selama lebih dari enam dekade, BCA telah menjadi bagian dari perjalanan jutaan masyarakat Indonesia. Kami memahami bahwa kebutuhan setiap individu terus berkembang, dan karena itulah kami berkomitmen untuk terus berinovasi dalam menyediakan solusi perbankan yang aman, mudah, dan terpercaya.
            <br />
            <br />
            Dengan jaringan layanan yang luas, teknologi yang terus diperbarui, serta semangat pelayanan dari hati, kami hadir untuk memberikan pengalaman perbankan terbaik—mulai dari transaksi sehari-hari, perencanaan keuangan, hingga dukungan untuk masa depan Anda.
          </p>

          <div className="button flex gap-4 items-center">
            <button className="primary-button ease-anim" onClick={() => setPopUp(true)}>Masuk</button>
            <a className="list-anim" style={{ "--color": "black" } as React.CSSProperties}>Pelajari Lebih Lanjut</a>
          </div>
        </div>

        <div className="img h-[35%] w-[35%]">
          <img src={HeroImg1} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-[8em]">
        <div className="img h-[35%] w-[35%]">
          <img src={HeroImg1} alt="" className="w-full h-full" />
        </div>

        <div className="text w-[50%]">
          <h1 className="font-bold text-6xl">Kurs eRate BCA</h1>

          <p className="my-3.5">
            Dalam dunia yang terus terhubung secara global, transaksi valuta asing menjadi bagian penting dari kegiatan bisnis maupun kebutuhan pribadi. Untuk mendukung kemudahan dan transparansi dalam setiap transaksi tersebut, BCA menghadirkan layanan Kurs eRate—kurs transaksi valuta asing yang diperbarui secara real-time dan digunakan dalam berbagai layanan digital BCA.
            <br />
            <br />
            Kurs eRate BCA dapat digunakan untuk transaksi melalui myBCA, KlikBCA Individu, BCA mobile, dan aplikasi e-Banking lainnya. Dengan kurs yang kompetitif dan informasi yang dapat diakses dengan mudah, Anda tidak hanya mendapatkan nilai tukar terkini, tetapi juga ketenangan dalam bertransaksi.
          </p>

          <div className="button flex gap-4 items-center">
            <button className="primary-button ease-anim">Mulai</button>
            <a className="list-anim" style={{ "--color": "black" } as React.CSSProperties}>Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home