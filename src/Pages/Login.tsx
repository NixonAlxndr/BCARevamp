import { useParams } from 'react-router'
import PrimaryButton from '../Components/PrimaryButton'
import HeroImg1 from "../assets/Hero-img-1.jpg"
import { useState } from 'react'

const Login = () => {
  let { type } = useParams()

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
      console.log("Submit data:", { userId, pin })
    }
  }

  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className="inner flex my-[5em] justify-between items-center">
        <div className="authentication w-[40%]">
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

          <PrimaryButton
            text='Masuk'
            classExtend='bg-primary w-full mt-3 hover:bg-secondary'
            onClick={handleSubmit}
          />
        </div>

        <div className="img w-[35%] h-[35%]">
          <img src={HeroImg1} alt="" className='w-full h-full' />
        </div>
      </div>
    </div>
  )
}

export default Login
