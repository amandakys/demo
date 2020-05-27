import React from "react";

export const Content = () => {
    return (
        <div id="banks" className="container story-filter alt-bg odd-bg challenger-banks">
            <div className="container">
                <div className="row">
                    <div className="industry-header azure col-lg-12 text-center" id="challenger-banks-head">
                        <img src="../img/icons/openbanking-azure.svg" height="70px" alt="Open Banking Enabled" />
                        <h3>Challenger Banks</h3>
                    </div>
                        <div className="row flex story-container">
                            <div className="customer-box col-md-12 col-lg-5 my-lg-auto my-3 building-block-azure shape-3-azure10">
                                <a href="revolut" target="_blank">
                                    <div className="box-container btn-shadow">
                                        <div id="revolut-story-img" className="image-container azure-overlay text-center"><img src="../img/logos/revolut.svg" width="160px" alt="Revolut" /></div>
                                        <p>Revolut uses TrueLayer to seamlessly link external bank accounts.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-12 col-lg-6 my-3 customer-info">
                                <span className="mx-4 tag azure"><span className="fa fa-university pr-1"></span>Challenger Banks</span>
                                <div className="px-4 pt-4">
                                    <h3 className="azure"><a href="revolut" target="_blank">PARTNERING WITH REVOLUT TO TRANSFORM DIGITAL FINANCE</a></h3>
                                    <p>“We see TrueLayer as a world leader in the Open Banking space. Like us, they have an aggressive roadmap that touches many different aspects of Open Banking. This, coupled with an incredibly smart team, made TrueLayer a great match for us.”</p>
                                    
                                </div>
                                <div className="customer-about row px-4">
                                    <div className="col-lg-4 col-md-3 mb-2">
                                        <h4>2x<br/>Increase</h4>
                                        <p>in weekly<br/>active users</p>
                                    </div>
                                    <div className="col-lg-4 col-md-3 mb-2">
                                        <h4>£30M+<br/>transactions</h4>
                                        <p>processed with significant cost savings</p>
                                    </div>
                                    <div className="col-lg-4 col-md-3 mb-2">
                                        <h4>Instant<br/>verification</h4>
                                        <p>of accounts</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <a className="btn btn-azure btn-shadow" href="/customers/revolut" target="_blank" role="button">Learn more<i
                                            className="fa fa-chevron-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}