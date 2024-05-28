import { useForm } from "react-hook-form"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useNavigate } from "react-router-dom"
import { useToken } from "../hooks/useToken";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const navigate = useNavigate();
  const { token } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    let token;
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(d => {
        d.user.getIdTokenResult()
          .then(d => {
            console.log(d)
            token = d.token
            localStorage.setItem('token', JSON.stringify(token))
            navigate('/admin')

          })
      })
      .catch(() => toast('Email and password are not matched', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: 'Bounce',
      }))
  }


  if (token) return <Navigate to="/admin" />
  return (
    <div className='w-full h-screen gap-2 flex flex-col bg-[#ECECEC] items-center justify-center'>
      {/* <Toaster /> */}
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}  >
        <div className="flex gap-1 flex-col items-end mb-3" >
          <label className='font-semibold' htmlFor="email">الإيميل الالكترونى</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, email: true })}
            className='focus-within:border-default md:w-[200px] border-2 rounded-md text-right p-2 outline-none' />
          {errors.email && errors.email.type === "email" && (
            <span>must be valid email</span>
          )}
        </div>
        <div className="flex gap-1 flex-col items-end" >
          <label className='font-semibold' htmlFor="password"> الباسوورد</label>
          <input
            type="password"
            id='password'
            {...register("password", { required: true })}
            className='focus-within:border-default md:w-[200px] border-2 rounded-md text-right p-2  outline-none' />
          {errors.password && errors.password.type === "required" && (
            <span>password is required</span>
          )}
        </div>
        <button
          type='submit'

          className='rounded-md bg-black disabled:bg-opacity-50 disabled:cursor-not-allowed text-white font-semibold text-center md:w-[200px] w-full py-2 px-3 mt-2'>تسجيل الدخول</button>
      </form>
    </div>
  )
}


export default Login