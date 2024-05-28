
export default function Footer() {
    return (
        <>
            <footer className="photfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <img src="assets/img/header-logo.png" alt="image" />
                                <p className="paragtitle">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <h6>Quick Links</h6>
                            <a href="#">About</a>
                            <a href="#">Gallery</a>
                            <a href="#">Print store</a>
                            <a href="#">News</a>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6">
                            <h6>Contact Us</h6>
                            <div className="fotcontact"><span><i className="fa-solid fa-phone"></i></span> +20102555555</div>
                            <div className="fotcontact"><span><i className="fa-solid fa-envelope"></i></span> Feadaa@gmail.com</div>
                            <div className="socialgr">
                                <span><a href="#"><i className="fa-brands fa-behance"></i></a></span>
                                <span><a href="#"><i className="fa-brands fa-x-twitter"></i></a></span>
                                <span><a href="#"><i className="fa-brands fa-facebook-f"></i></a></span>
                            </div>
                        </div>
                        <div className="col-12"><p className="copyright">All right are reserved for sunlit photography 2024</p></div>
                    </div>
                </div>
            </footer>

            <div id="button-top">
                <i className="fa-solid fa-chevron-up"></i>
            </div>
        </>
    )
}
