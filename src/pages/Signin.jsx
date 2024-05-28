import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import instance from "../axios/instance";
import { useState } from "react";
import Spinner from "../utils/Spinner";

function Signin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [laoding, setLoading] = useState(false);
    const [backErr, setBackErr] = useState('')
    const navigate = useNavigate();
    const onSubmit = (data) => {
        setLoading(true);
        instance.post('/login', data)
            .then(d => {
                const data = d.data[0]
                if (data.success) {
                    localStorage.setItem('userData', JSON.stringify({
                        'id': data.data.id,
                        'name': data.data.name,
                        'email': data.data.email,
                        'userToken': data.token
                    }))
                    navigate('/store')
                } else {
                    setBackErr(data.message)
                }
                setLoading(false)
            })
            .catch(err => { setLoading(false); setBackErr(err) });
    }
    return (
        <>
            <>
                {/* Start photsignforms */}
                <section className="photsignforms">
                    <div className="container">
                        {laoding ? (<Spinner />) : (

                            <div className="row">
                                <div className="col-md col-sm-12 col-12">
                                    <div className="signimages">
                                        <img className="signimg01" src="img/signimg01.png" alt="image" />
                                        <img className="signimg02" src="img/signimg02.png" alt="image" />
                                        <img className="signimg03" src="img/signimg03.png" alt="image" />
                                    </div>
                                </div>
                                <div className="col-md col-sm-12 col-12">
                                    <div className="signsforms">
                                        <div className="uplogo">
                                            <img src="img/header-logo.png" alt="image" />
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="error text-danger">
                                                {backErr}
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-sm col-12">
                                                    <input {...register('email', { required: "Email is required" })} type="text" placeholder="Email" />
                                                    <span className="text-danger">
                                                        {errors.email && <p>{errors.email.message}</p>}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <label>Password</label>
                                                </div>
                                                <div className="col-12">
                                                    <input {...register('password', { required: "Password is required" })} type="text" placeholder="Password" />
                                                    <span className="text-danger">
                                                        {errors.password && <p>{errors.password.message}</p>}
                                                    </span>
                                                </div>
                                                <div className="col-12">
                                                    <a className="forgetlink" href="#">
                                                        Forget your password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <input type="submit" name="SEND" defaultValue="LOGIN" />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="aftform">
                                            <p>
                                                Already have an account? <Link to="/signup">Sign Up</Link>
                                            </p>
                                            <div className="forline">
                                                <span>OR</span>
                                            </div>
                                            <a className="orgoogle">
                                                <img src="img/googleicon.png" alt="icon" /> CONTINUE WITH GOOGLE
                                                ACCOUNT
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                {/* End photsignforms */}
            </>

        </>
    )
}

export default Signin