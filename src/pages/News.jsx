/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import instance from "../axios/instance";
import Spinner from "../components/Spinner";
import Singlenew from "./Singlenew";

function News() {


    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    const [activeCat, setActiveCat] = useState()
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    const [loading, setLoading] = useState(false)


   


    useEffect(() => {
        setLoading(true)
        instance.get('/api/new')
            .then(d => {
                console.log('news', d)
                setNews(d.data.data)
                setLoading(false)
            });
        }, [])
        
        useEffect(() => {
            setLoading(true)
            instance.get('/api/category')
            .then(d => {
                console.log('categrirs', d)
                setCategories(d.data.categories)
                setActiveCat(d.data.categories[0].slug)
                setLoading(false)
            });
    }, [])





    return (

        <>
            {/* Start photintronews */}
            <section className="photintronews">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-7 col-md col-sm-12 col-12"
                            data-aos="fade-right"
                            data-aos-offset={300}
                            data-aos-easing="ease-in-sine"
                        >
                            <h2>Lorem Ipsum&nbsp;is simply </h2>
                            <p>
                                Lorem Ipsum&nbsp;is simply dummy text of the printing and
                                typesetting industry. ever since the 1500s
                                <span className="animation-shap newshp2">
                                    <img src="assets/img/newshp2.png" alt="shap" />
                                </span>
                            </p>
                            <a className="contactbtn" href="#">
                                Learn More
                            </a>
                        </div>
                        <div
                            className="col-lg-5 col-md col-sm-12 col-12"
                            data-aos="fade-left"
                            data-aos-offset={300}
                            data-aos-easing="ease-in-sine"
                        >
                            <span className="squardots sqdofortop">
                                <img src="assets/img/squardots.png" alt="img" />
                            </span>
                            <span className="squardots sqdoforbottom">
                                <img src="assets/img/squardots.png" alt="img" />
                            </span>
                            <div className="upsliceimg">
                                <img className="sliceimg" src="assets/img/news-introimg.png" alt="image" />
                                <div className="upshapesslice">
                                    <div className="row">
                                        <div className="col-2">
                                            <span className="hidbottom" />
                                        </div>
                                        <div className="col-2">
                                            <span className="hidtop" />
                                        </div>
                                        <div className="col-2">
                                            <span className="hidbottom" />
                                        </div>
                                        <div className="col-2">
                                            <span className="hidtop" />
                                        </div>
                                        <div className="col-2">
                                            <span className="hidbottom" />
                                        </div>
                                        <div className="col-2">
                                            <span className="hidtop" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="animation-shap newshp1">
                        <img src="assets/img/newshp1.png" alt="shap" />
                    </span>
                </div>
            </section>
            {/* End photintronews */}

            {loading ? (<Spinner />) : (

                < section className="photnewsproducts">
                    <div className="container">
                        <ul className="itemsproducts">
                            {categories.map((cat, ix) => (

                                <li onClick={() => setActiveCat(cat.slug)} className={cat?.slug == activeCat ? 'itactive' : ''} key={ix}>{cat?.title}</li>
                            ))}
                        </ul>
                        <div className="upnewsproducts">
                            <div className="row">
                                {news && news.map((nw, idx) => {


                                    return nw.category.slug == activeCat && (

                                        <div
                                            key={idx}
                                            className="col-lg-4 col-md-4 col-sm-6 col-12"
                                            data-aos="zoom-in"
                                            data-aos-duration={300}
                                            data-aos-delay={400}
                                        >
                                            <Singlenew 
                                                d={nw.days} 
                                                h={nw.hours} 
                                                m={nw.minutes} 
                                                s={nw.seconds} 
                                                image={nw.image} 
                                                title={nw.title} 
                                                setDays={setDays}    
                                                setHours={setHours}    
                                                setMinutes={setMinutes}    
                                                setSeconds={setSeconds}    
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section >
            )
            }


        </>
    )
}

export default News