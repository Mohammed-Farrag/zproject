import { useEffect, useState } from "react"
// import firebase from 'firebase';
// import { collection, getDocs, doc } from '@firebase/firestore';
// import { ref,  } from "@firebase/storage"
// import { db, storage } from '../firebase/index.js';
import { Link } from "react-router-dom";
import instance from "../axios/instance";
import Spinner from "../components/Spinner";



function Gallery() {
    const [galleries, setGalleries] = useState([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setLoading(true)
        instance.get('/api/gallery')
            .then(d => {
                setGalleries(d.data.data)
                setLoading(false)
            });
    }, [])




    return (
        <>
            {/* Start photgallery */}
            <section className="photgallery">
                <div className="container">
                    <div
                        className="titlelogo"
                        data-aos="fade-up"
                        data-aos-offset={300}
                        data-aos-easing="ease-in-sine"
                    >
                        <img className="gallerylogo" src="assets/img/fidaa-black.png" alt="image" />
                        <img
                            className="animation-shap starimg"
                            src="assets/img/starshp.png"
                            alt="img"
                        />
                        <img
                            className="camicon-gallerytitle"
                            src="assets/img/camicon-gallerytitle.png"
                            alt="img"
                        />
                    </div>

                    {loading ? (<Spinner />) : (

                        <div className="row">
                            {galleries?.map((gal, idx) => (
                                <div key={idx} className="col-md-4 col-sm-6 col-12">

                                    <Link to="/singleproduct" className="col-md-4 col-sm-6 col-12"  >

                                        <div className=""

                                            data-aos="zoom-in"
                                            data-aos-duration={300}
                                            data-aos-delay={200}
                                        >
                                            <div className="gallerybox">
                                                <img src={`${gal.thumbnail}`} alt="image" />
                                                <div className="boxoverlay">
                                                    <a href="#">{gal.title}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <img src="assets/img/square-lines.png" className="sqlin1" alt="img" />
                <img src="assets/img/square-lines.png" className="sqlin2" alt="img" />
                <img
                    src="assets/img/circle-dashes.png"
                    className="animation-shap circle-dashes"
                    alt="img"
                />
            </section>
            {/* End photgallery */}
        </>

    )
}

export default Gallery