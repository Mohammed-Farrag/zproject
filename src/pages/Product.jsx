import { useEffect, useState } from "react"
import instance from "../axios/instance"
import { Link, useParams } from "react-router-dom"
import Spinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { addNewItem } from "../store/CartSlice/CartSlice";
import { useForm } from "react-hook-form";

function Product() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(product?.size);
    const [q, setQ] = useState(1);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const addToCart = () => {
        const cartItem = {
            ...product,
            quantity: q
        }

        dispatch(addNewItem(cartItem));

        setQ(0);
    }



    const onSubmit = (data) => {
        setLoading(true)
        instance.post('/review', {...data, product_id: id})
            .then(d => {
                console.log(d);
            })
            .catch(() => { setLoading(false); });
    }
    useEffect(() => {
        setLoading(true)
        instance.get(`/api/product/${id}`)
            .then(d => {
                console.log('singlepro', d)
                setProduct(d.data.data)
                setSize(d.data.data.size)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        instance.get(`/api/product`)
            .then(d => {
                console.log('products', d)
                setProducts(d.data.data)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <section className="photproductpart">
                <div className="container">
                    {loading ? (<Spinner />) : (
                        <div className="row">
                            <div className="col-md col-sm-12 col-12" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <div className="product-image">
                                    <img src={`${product?.image}`} alt="image" />
                                </div>
                            </div>
                            <div className="col-md col-sm-12 col-12" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <div className="product-details">
                                    <h4>{product?.title} <span><i className="fa-solid fa-arrow-up-from-bracket"></i></span></h4>
                                    <div className="prdpricing">
                                        <span>{product?.price}$</span>
                                        <p>{product?.description}</p>
                                    </div>
                                    <div className="prdsize">
                                        <h6>Paper Size</h6>
                                        <div>
                                            <span className={size == 'A0' ? 'active' : ''} onClick={() => setSize('A0')}>A0</span>
                                            <span className={size == 'A1' ? 'active' : ''} onClick={() => setSize('A1')}>A1</span>
                                            <span className={size == 'A2' ? 'active' : ''} onClick={() => setSize('A2')}>A2</span>
                                        </div>
                                        {/* <p>A1 (841mm x 594mm) - 151$ - limited to 5 editions</p> */}
                                    </div>
                                    <div className="prdcount">
                                        <h6>Quantity</h6>
                                        <div>
                                            <span onClick={() => setQ(old => old > 1 ? --old : 1)} >-</span>
                                            <span>{q}</span>
                                            <span onClick={() => setQ(old => ++old)}>+</span>
                                        </div>
                                    </div>
                                    <div className="prdaddcard">
                                        <button
                                            onClick={() => addToCart()}
                                            className="text-black hover:!text-white"
                                            type="button">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="photaddreview">
                <div className="container">
                    <h3>ADD A REVIEW <span className="animation-shap productshp1"><img src="/assets/img/product-shp1.png" /> </span></h3>
                    <div className="row">
                        <div className="col-md" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <form  onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input type="text" {...register('name')}  placeholder="Your Name" />
                                </div>
                                <div>
                                    <input type="email" {...register('email')}  placeholder="Your Email" />
                                </div>
                                <div>
                                    <textarea {...register('comment')}  placeholder="Your Comment" rows="6"></textarea>
                                </div>
                                <div className="ratestars">
                                    <span>YOUR RATE:</span>
                                    <span><i className="fa-regular fa-star"></i></span>
                                    <span><i className="fa-regular fa-star"></i></span>
                                    <span><i className="fa-regular fa-star"></i></span>
                                    <span><i className="fa-regular fa-star"></i></span>
                                    <span><i className="fa-regular fa-star"></i></span>
                                </div>
                                <div>
                                    <input type="submit" name="SEND" value="SEND" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img className="reviewimg" src="/assets/img/review-img.png" alt="image" />
                            <span className="animation-shap abshp3"><img src="/assets/img/about-shp3.png" alt="shap" /></span>
                        </div>
                    </div>
                </div>
            </section >

            <section className="photmaylike">
                <div className="container">
                    <h4>You may also like</h4>
                    <div className="row">

                        {products.length > 0 && products?.slice(0, 3).map((product, idx) => (

                            <div key={idx} className="col-lg-4 col-md-4 col-sm-6 col-12">

                                <Link
                                    to={`/store/${product.id}`}
                                    className="col-lg-4 col-md-4 col-sm-6 col-12"
                                    data-aos="zoom-in" data-aos-duration="300" data-aos-delay="200">
                                    <div className="mainproduct">
                                        <div className="upimage">
                                            <img src={`${product?.image}`} alt="image" />
                                            <span><i className="fa-regular fa-file-image"></i></span>
                                        </div>
                                        <div className="productdetails">
                                            <h5>{product?.title}</h5>
                                            <span className="prodprice">{product?.price}$</span>
                                            <span className="carticon"><i className="fa-solid fa-cart-plus"></i></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


        </>
    )
}

export default Product