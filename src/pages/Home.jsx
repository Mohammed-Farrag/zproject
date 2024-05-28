import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="photopenpage">
            <div className="maincont">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src="assets/img/startimg01.jpg" className="d-block startimg" alt="image" />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/startimg02.jpg" className="d-block startimg" alt="image" />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/startimg03.jpg" className="d-block startimg" alt="image" />
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src="assets/img/startimg01.jpg" className="d-block startimg" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="undercontent">
                    <Link className="socialicon"><span><i className="fa-brands fa-behance"></i></span></Link>
                    <Link className="socialicon"><span><i className="fa-brands fa-x-twitter"></i></span></Link>
                    <Link className="socialicon"><span><i className="fa-brands fa-facebook-f"></i></span></Link>
                    <Link to="/store" className="enterbtn">ENTER</Link>
                </div>
                <div className="uphomelogo"><img src="assets/img/fidaapng.png" alt="logo" /></div>
            </div>
        </section>
    )
}

export default Home