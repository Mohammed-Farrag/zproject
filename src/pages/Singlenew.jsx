/* eslint-disable no-unused-vars */
import CD from "../helpers/CD.jsx";

// eslint-disable-next-line react/prop-types
function Singlenew({ d, h, m, s , image, title, setDays, setHours, setMiutes, setSeconds}) {



    return (
        <div className="newsproduct">
            <div className="upimage">
                <img src={`${import.meta.env.VITE_BASEURL}/storage/${image}`} alt="image" style={{maxHeight: '200px'}} />
                <div className="newstimer">
                    <div className="row">
                        <div className="col">
                            <span className="timer-count">07</span>
                            <span className="timer-text">DAYS</span>
                        </div>
                        <div className="col">
                            <span className="timer-count">04</span>
                            <span className="timer-text">HOURS</span>
                        </div>
                        <div className="col">
                            <span className="timer-count">02</span>
                            <span className="timer-text">MINUTES</span>
                        </div>
                        <div className="col">
                            <span className="timer-count">01</span>
                            <span className="timer-text">SECONDS</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productdetails">
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default Singlenew