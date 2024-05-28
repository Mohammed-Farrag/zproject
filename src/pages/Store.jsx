import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import instance from "../axios/instance"
import Spinner from "../components/Spinner"


function Store() {



    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState()
    const [loading, setLoading] = useState(false)





    useEffect(() => {
        setLoading(true)
        instance.get('/api/product')
            .then(d => {
                setProducts(d.data.data)
                setLoading(false)
            });
    }, [])

    useEffect(() => {
        setLoading(true)
        instance.get('/api/category')
            .then(d => {
                setCategories(d.data.categories)
                setActiveCat(d.data.categories[0].slug)
                setLoading(false)
            });
    }, [])



    return (
        <>

            <section className="photstoreintro">
                <div className="container">
                    <img className="animation-shap circle-dashes" src="assets/img/circle-dashes.png" alt="img" />
                    <div className="row">

                        <div className="col-md-5 col-sm-12 col-12" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="store-carousel stcar-left">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img01.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img02.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img03.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img04.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-12 col-12" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="storeintrocontent">
                                <h2>Indulge <br /> your eyes <img className="animation-shap starimg" src="assets/img/starshp.png" alt="img" /></h2>
                                <h6>with</h6>
                                <img src="assets/img/header-logo.png" alt="logo" />
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12 col-12" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="store-carousel stcar-right">
                                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img04.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img03.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img02.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                        <div className="carousel-item" data-bs-interval="5000">
                                            <img src="assets/img/slide-store-img01.jpg" className="d-block storeintroimg" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {loading ? (<Spinner />) : (

                <section className="photstoreproducts">
                    <img className="animation-shap lifeshap01" src="assets/img/lifeshap.png" alt="img" />
                    <img className="animation-shap lifeshap02" src="assets/img/lifeshap.png" alt="img" />
                    <div className="container">
                        <img className="animation-shap squardots" src="assets/img/squardots.png" alt="img" />
                        <ul className="itemsproducts">
                            {categories?.map((cat, ix) => (
                                <li onClick={() => setActiveCat(cat.slug)} className={cat?.slug == activeCat ? 'itactive' : ''} key={ix}>{cat?.title}</li>
                            ))}
                        </ul>
                        <div className="upmainproducts">
                            <div className="row">
                                {products.length > 0 && products?.map((product, idx) => {

                                    return product.category.slug == activeCat && (

                                        <Link
                                            key={idx}
                                            to={`/store/${product.id}`}
                                            className="col-lg-4 col-md-4 col-sm-6 col-12" data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200">
                                            <div className="mainproduct">
                                                <div className="upimage">
                                                    <img src={`${product.image}`} alt="image" />
                                                    <span><i className="fa-regular fa-file-image"></i></span>
                                                </div>
                                                <div className="productdetails">
                                                    <h5>{product.title} </h5>
                                                    <span className="prodprice">{product.price}$</span>
                                                    <span className="carticon"><i className="fa-solid fa-cart-plus"></i></span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                                )}


                            </div>
                        </div>
                    </div>
                </section>
            )}


        </>

    )
}

export default Store