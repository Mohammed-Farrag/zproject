
export default function Cart() {
    return (
        <>
            <>
                {/* Start photcart */}
                <section className="photcart">
                    <div className="container">
                        <h3>
                            YOUR CART{" "}
                            <img
                                className="animation-shap starimg"
                                src="img/starshp.png"
                                alt="img"
                            />
                        </h3>
                        <div className="carttable">
                            <img
                                className="animation-shap twocircle"
                                src="img/twocircle.png"
                                alt="image"
                            />
                            <div className="row tabletitles">
                                <div className="col-5">
                                    <h6>Product</h6>
                                </div>
                                <div className="col-2">
                                    <h6>Quantity</h6>
                                </div>
                                <div className="col-2">
                                    <h6>Price</h6>
                                </div>
                                <div className="col-2">
                                    <h6>subtotal</h6>
                                </div>
                                <div className="col-1" />
                            </div>
                            {/* start product cart row */}
                            <div className="row tableproduct">
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col text-end">
                                            <span className="smimg">
                                                <img src="img/productimg.png" alt="image" />
                                            </span>
                                        </div>
                                        <div className="col dtimg text-start">
                                            <span>lorem ipsum</span>
                                            <span>size: A1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="incr-decr">
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <span className="tbprice">123$</span>
                                </div>
                                <div className="col-2">
                                    <span className="tbprice">123$</span>
                                </div>
                                <div className="col-1">
                                    <span className="xicon">
                                        <i className="fa-regular fa-circle-xmark" />
                                    </span>
                                </div>
                            </div>
                            {/* End product cart row */}
                            {/* start product cart row */}
                            <div className="row tableproduct">
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col text-end">
                                            <span className="smimg">
                                                <img src="img/productimg.png" alt="image" />
                                            </span>
                                        </div>
                                        <div className="col dtimg text-start">
                                            <span>lorem ipsum</span>
                                            <span>size: A1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="incr-decr">
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <span className="tbprice">123$</span>
                                </div>
                                <div className="col-2">
                                    <span className="tbprice">123$</span>
                                </div>
                                <div className="col-1">
                                    <span className="xicon">
                                        <i className="fa-regular fa-circle-xmark" />
                                    </span>
                                </div>
                            </div>
                            {/* End product cart row */}
                            {/* start product cart row */}
                            <div className="row tableproduct">
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col text-end">
                                            <span className="smimg">
                                                <img src="img/productimg.png" alt="image" />
                                            </span>
                                        </div>
                                        <div className="col dtimg text-start">
                                            <span>lorem ipsum</span>
                                            <span>size: A1</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="incr-decr">
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <span className="tbprice">123$</span>
                                </div>
                                <div className="col-2">
                                    <span className="tbprice">123$</span>
                                </div>
                                <div className="col-1">
                                    <span className="xicon">
                                        <i className="fa-regular fa-circle-xmark" />
                                    </span>
                                </div>
                            </div>
                            {/* End product cart row */}
                        </div>
                    </div>
                </section>
                {/* End photcart */}
            </>

        </>
    )
}
