
function Contact() {
    return (
        <>
            <>
                {/* Start photintrocontact */}
                <section className="photintrocontact">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-7 col-md col-sm-12 col-12"
                                data-aos="fade-right"
                                data-aos-offset={300}
                                data-aos-easing="ease-in-sine"
                            >
                                <h2>Contact with me </h2>
                                <p>
                                    Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                    typesetting industry. ever since the 1500s
                                    <span className="animation-shap abshp2">
                                        <img className="" src="assets/img/about-shp2.png" alt="shap" />
                                    </span>
                                </p>
                                <a className="contactbtn" href="#">
                                    Contact Now
                                </a>
                            </div>
                            <div
                                className="col-lg-5 col-md col-sm-12 col-12"
                                data-aos="fade-left"
                                data-aos-offset={300}
                                data-aos-easing="ease-in-sine"
                            >
                                <div className="upcameraimg">
                                    <img
                                        className="camimg"
                                        src="assets/img/phone-introcontact.png"
                                        alt="image"
                                    />
                                    <span className="animation-shap abshp3">
                                        <img className="" src="assets/img/about-shp3.png" alt="shap" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span className="animation-shap abshp1">
                            <img className="" src="assets/img/about-shp1.png" alt="shap" />
                        </span>
                        <div
                            className="contintroaft"
                            data-aos="fade-up"
                            data-aos-offset={300}
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="row">
                                <div className="col">
                                    <span>
                                        <i className="fa-solid fa-phone-volume" />
                                    </span>
                                    <p>+20102555555</p>
                                </div>
                                <div className="col">
                                    <span>
                                        <i className="fa-regular fa-envelope" />
                                    </span>
                                    <p>Feadaa@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End photintrocontact */}
                {/* Start photcontactform */}
                <section className="photcontactform">
                    <div className="container">
                        <div
                            className="upformcontact"
                            data-aos="fade-up"
                            data-aos-offset={300}
                            data-aos-easing="ease-in-sine"
                        >
                            <form>
                                <div className="row">
                                    {/* <div class="col-12"><label>Name</label></div> */}
                                    <div className="col-sm col-12">
                                        <input type="text" name="" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div class="col-12"><label>Email Address</label></div> */}
                                    <div className="col-12">
                                        <input type="email" name="" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div class="col-12"><label>Mobile Number</label></div> */}
                                    <div className="col-12">
                                        <input type="tel" name="" placeholder="Mobile Number" />
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div class="col-12"><label>Subject</label></div> */}
                                    <div className="col-12">
                                        <input type="text" name="" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <div class="col-12"><label>Message</label></div> */}
                                    <div className="col-12">
                                        <textarea
                                            name=""
                                            placeholder="Message"
                                            rows={6}
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input type="submit" name="SEND" defaultValue="SEND" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* End photcontactform */}
            </>

        </>
    )
}

export default Contact