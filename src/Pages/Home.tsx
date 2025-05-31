import { useEffect, useRef, useState } from "react"
import HeroImg1 from "../assets/Hero-img-1.jpg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useNavigate } from "react-router"
import { kurs } from "../Data/kurs.ts"
import PrimaryButton from "../Components/PrimaryButton.tsx"

const RenderTable = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 rounded-xl overflow-auto">
      <table className="min-w-full border-collapse border border-gray-300 rounded-xl overflow-hidden shadow-md">
        <thead>
          <tr className="bg-primary text-white text-sm">
            <th className="p-3 text-left align-bottom" rowSpan={2}>Mata Uang</th>
            <th className="p-2 text-center" colSpan={2}>
              e-Rate <br /><span className="text-xs font-normal">31 Mei 2025 / 16.10 WIB</span>
            </th>
            <th className="p-2 text-center" colSpan={2}>
              TT Counter <br /><span className="text-xs font-normal">28 Mei 2025 / 17.48 WIB</span>
            </th>
            <th className="p-2 text-center" colSpan={2}>
              Bank Notes <br /><span className="text-xs font-normal">28 Mei 2025 / 08.12 WIB</span>
            </th>
          </tr>
          <tr className="bg-primary text-white text-sm">
            <th className="p-2 text-center">Beli</th>
            <th className="p-2 text-center">Jual</th>
            <th className="p-2 text-center">Beli</th>
            <th className="p-2 text-center">Jual</th>
            <th className="p-2 text-center">Beli</th>
            <th className="p-2 text-center">Jual</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {
            kurs.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="p-3 font-medium whitespace-nowrap">{item.nama}</td>
                <td className="text-center">{item["e-rate"].beli.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{item["e-rate"].jual.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{item["tt-counter"].beli.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{item["tt-counter"].jual.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{item["bank-notes"].beli === 0 ? "0,00" : item["bank-notes"].beli.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</td>
                <td className="text-center">{item["bank-notes"].jual === 0 ? "0,00" : item["bank-notes"].jual.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const Home = () => {
  const [popUp, setPopUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [ type, setType ] = useState<"Individual" | "Bisnis" | null>(null);
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
          className="popup fixed z-10 left-0 bottom-0 right-0 border-t-2 border-black bg-white py-4"
        >
          <h1 className="text-2xl text-center font-bold">Daftar Rekening Sekarang, Gratis</h1>
          <p className="text-center text-gray-600">Mulai dengan memilih jenis rekening</p>
          <div className="flex justify-between w-[70%] mx-auto my-7">

            <div className="bisnis w-1/2">
              <div className="flex cursor-pointer gap-2 items-center" onClick={() => setType("Bisnis")}>
                <div 
                  className={`bullet ${type === "Bisnis" ? "bullet-active" : ""} rounded-full border-2 w-5 h-5 border-red-500`}
                  style={{"--color" : "red"} as React.CSSProperties}  
                ></div>
                <p className="font-bold text-red-500 text-2xl">Rekening Bisnis</p>
              </div>
              <div className="list ml-12">
                <ul>
                  <li className="list-disc">Berlaku untuk bisnis dan penjualan biasa</li>
                  <li className="list-disc">Mengirim dan menerima pembayaran secara global</li>
                  <li className="list-disc">Tanpa biaya konfigurasi atau biaya bulanan</li>
                  <li className="list-disc">Perlindungan penjual untuk penjualan yang memenuhi syarat</li>
                </ul>
              </div>
            </div>

            <div className="individual w-1/2">
              <div className="flex cursor-pointer gap-2 items-center" onClick={() => setType("Individual")}>
                <div 
                  className={`bullet ${type === "Individual" ? "bullet-active" : ""} rounded-full border-2 w-5 h-5 border-primary`}
                  style={{"--color" : "var(--color-primary)"} as React.CSSProperties}
                ></div>
                <p className="font-bold text-primary text-2xl">Rekening Pribadi</p>
              </div>
              <div className="list ml-12">
                <ul>
                  <li className="list-disc">Bayar secara daring ke jutaan pedagang nasional</li>
                  <li className="list-disc">Berbelanja dengan penuh percaya diri dengan perlindungan pembeli pada transaksi yang memenuhi syarat</li>
                </ul>
              </div>
            </div>
          </div>

          <PrimaryButton text="Berikutnya" onClick={() => navigate(`login/${type}`)} classExtend="bg-primary w-[10%] hover:bg-secondary justify-self-center rounded-[50px]" />

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

      <div className="flex justify-between mt-[8em]">
        <div className="table h-[45%] w-[45%]">
          <RenderTable />
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