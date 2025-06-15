import { useNavigate, useParams } from 'react-router'
import PrimaryButton from '../Components/PrimaryButton'
import HeroImg1 from "../assets/Hero-img-1.png"
import { useState } from 'react'
import SecondaryButton from '@/Components/SecondaryButton'

const Login = () => {
  let { type } = useParams()
  const navigate = useNavigate()

  const [userId, setUserId] = useState('');
  const [pin, setPin] = useState('');
  const [errors, setErrors] = useState<{ userId?: string; pin?: string }>({});

  const handleSubmit = () => {
    const newErrors: { userId?: string; pin?: string } = {}

    if (!userId.trim()) {
      newErrors.userId = 'USER ID tidak boleh kosong'
    }

    if (!pin.trim()) {
      newErrors.pin = 'PIN tidak boleh kosong'
    } else if (pin.length < 6) {
      newErrors.pin = 'PIN minimal 6 karakter'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      navigate(`/${userId}/services/payment`)
    }
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className="inner flex mt-[8em] shadow-[0_0_18px_1px_rgba(0,0,0,.25)] mb-10 w-[800px] items-center overflow-hidden border-black border-[0px] gap-4 rounded-lg">
        <div className="authentication w-[25em] py-4 px-3">
          <p className="text-3xl font-bold mb-3 text-center">
            {type}
          </p>

          <div className="user_id w-full mb-4">
            <input
              className={`input-box w-full ${errors.userId ? 'border-red-500' : ''}`}
              type="text"
              placeholder='USER ID Anda'
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            {errors.userId && (
              <p className="text-red-500 text-sm mt-1">{errors.userId}</p>
            )}
          </div>

          <div className="pin w-full mb-4">
            <input
              className={`input-box w-full ${errors.pin ? 'border-red-500' : ''}`}
              type="password"
              placeholder='PIN Internet Banking Anda'
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            {errors.pin && (
              <p className="text-red-500 text-sm mt-1">{errors.pin}</p>
            )}
          </div>
          
          <div className='flex gap-5'>
            <PrimaryButton
              text='Masuk'
              classExtend='bg-primary-blue flex-1 hover:bg-secondary-blue'
              onClick={handleSubmit}
            />
            <SecondaryButton 
              text='Kembali'
              classExtend='flex-1'
            />
          </div>

          <div className="notes mt-3.5">
            <p className="text-red-500 text-xs"><b>Note: </b>USER ID dan PIN Internet Banking dapat diperoleh pada saat Anda melakukan Registrasi Internet melalui ATM BCA. Untuk informasi lebih lanjut hubungi Halo BCA 1500888.</p>
          </div>
        </div>

        <div className="img h-[350px]">
          <img src={HeroImg1} alt="" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default Login
