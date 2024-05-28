import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import instance from "../axios/instance";
import { useState } from "react";
import Spinner from "../utils/Spinner";

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [backErr, setBackErr] = useState('')
    const navigate = useNavigate();



    const onSubmit = (data) => {
        setLoading(true)
        instance.post('/register', data)
            .then(d => {
                const data = d.data[0]
                if (data.success) {
                    navigate('/signin')
                } else {
                    setBackErr(data.message)
                }
                setLoading(false)
            })
            .catch(err => { setLoading(false); setBackErr(err) });
    }


    return (
        <>

            {/* Start photsignforms */}
            <section className="photsignforms">
                <div className="container">
                    {loading ? (<Spinner />) : (

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
                                        <div className="error">
                                            {backErr}
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>User Name</label>
                                            </div>
                                            <div className="col-sm col-12">
                                                <input {...register('name', { required: "Name is required" })} type="text" placeholder="User Name" />
                                                <span className="text-danger">
                                                    {errors.name && <p>{errors.name.message}</p>}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>Email Address</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="email" {...register('email', {
                                                        required: "Email is required",
                                                        email: "Email must be valid email"
                                                    })}
                                                    placeholder="Email Address"
                                                />
                                                <span className="text-danger">
                                                    {errors.email && <p>{errors.email.message}</p>}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>New Password</label>
                                            </div>
                                            <div className="col-12">
                                                <input type="password" {...register('password', {
                                                    required: "Password is required",
                                                    maxLength: {
                                                        value: 20,
                                                        message: "Password must not exceed 20 digits"
                                                    },
                                                    minLength: {
                                                        value: 3,
                                                        message: "Password must not more than 3 digits"
                                                    },
                                                })} placeholder="New Password" />
                                                <span className="text-danger">
                                                    {errors.password && <p>{errors.password.message}</p>}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>Comfirm Password</label>
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="password"
                                                    {...register('password_confirmation', {
                                                        required: "Password Confirm is required",
                                                        validate: (val) => {
                                                            if (watch('password') != val) {
                                                                return "Your passwords do no match";
                                                            }
                                                        }
                                                    })}
                                                    placeholder="Confirm Password"
                                                />
                                                <span className="text-danger">
                                                    {errors.password_confirmation && <p>{errors.password_confirmation.message}</p>}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" name="SEND" defaultValue="SIGN UP" />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="aftform">
                                        <p>
                                            Already have an account? <Link to="/signin">Login</Link>
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
    )
}

export default Signup