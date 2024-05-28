import { Link, useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth'
import { auth } from "../../firebase"

function Sidebar() {
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('token')
      navigate('/')
    })
  }
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-[300px] h-full bg-default text-white font-bold'>
            <img src="assets/img/fidaapng.png" className='w-[60%] mx-auto -mt-10' alt="" />
            <Link
                className='w-full flex gap-1 items-center justify-end pe-12 py-2 bg-gradient-to-l from-[#276DB8]'
                to='/admin'>
                إضافة صورة
            </Link>

            <Link
                className='w-full flex gap-1 items-center justify-end pe-12 py-2 bg-gradient-to-l from-[#276DB8]'
                to='/admin/addNew'>
                إضافة خبر
            </Link>

            <button 
            onClick={() => logout()}
            className='w-full flex gap-1 items-center justify-end pe-12 py-2 bg-gradient-to-l from-[#276DB8]'>
              تسجيل خروج
            </button>

        </div>
  )
}

export default Sidebar