import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const navigate = useNavigate();
    const store = useSelector(state => state.cartSlice);
    const [cartQ] = useState(store.items.length);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const handleLogout = () => {
        localStorage.removeItem('userData');
        navigate(0);
    }
    return (
        <section id="header" className="photheader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <Link className="linklogo" to="/"><img src="/assets/img/header-logo.png" alt="logo" /></Link>
                        <span className="menubtn"><i className="fa-solid fa-bars"></i></span>
                    </div>
                    <div className="col-lg-7 col-md-8 col-sm-12 col-12">
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to="/gallery" >Gallery</Link></li>
                            <li><Link to="/news" >News</Link></li>
                            <li><Link to="/store" >Print store</Link></li>
                            <li><Link to="/contact" >contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-1 col-sm-12 col-12">
                        <div className="upaccount">
                            <Link className="relative" to="cart">
                                <span><i className="fa-solid fa-cart-shopping"></i></span>
                                <i className="absolute -top-3 -right-2 size-5 flex items-center justify-center rounded-full text-xs bg-white text-black">{cartQ}</i>
                            </Link>
                            {userData?.userToken == undefined ? (
                                <span className="cursor-pointer" onClick={handleLogout}>
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </span>
                            ) : (
                                <Link to="signin"><span><i className="fa-solid fa-user"></i></span></Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
