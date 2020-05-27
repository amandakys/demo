import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div id="main-footer" className="container-fluid">
                <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12 d-block" id="newsletter-pre">
                    <h3>Please stay in touch!</h3>
                    <p>Don’t miss new features, market coverage, regulations, and more.</p>
                    </div>
                    <div className="col col-lg-6 col-12">
                    <form id="newsletter">
                        <div className="row signup-form">
                        </div>
                    </form>
                    </div>
                </div>

                <hr/>

                <div className="row footer-menu">
                    <div className="col-lg-2 col-md-4 col-6">
                    <p>Products</p>
                    <ul>
                        <li>
                        <a href="/data-api">Data API</a>
                        </li>
                        <li>
                        <a href="/payments-api">Payments API</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <p>Public Policy</p>
                    <ul>
                        <li>
                        <a href="/psd2">PSD2</a>
                        </li>
                        <li>
                        <a href="/openbanking">Open Banking</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <p>Developers</p>
                    <ul>
                        <li>
                        <a href="http://docs.truelayer.com/">Documentation</a>
                        </li>
                        <li>
                        <a href="http://support.truelayer.com" target="_blank">FAQs</a>
                        </li>
                        <li>
                        <a href="https://truelayer.zendesk.com/hc/en-us/requests/new" target="_blank">Tickets</a>
                        </li>
                        <li>
                        <a href="https://status.truelayer.com" target="_blank">Status page</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <p>Company</p>
                    <ul>
                        <li>
                        <a href="/contact" >Contact us</a>
                        </li>
                        <li>
                        <a href="/about">About us</a>
                        </li>
                        <li>
                        <a href="https://blog.truelayer.com/" target="_blank">Blog</a>
                        </li>
                        <li>
                        <a href="https://truelayer.workable.com" target="_blank">Jobs</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <p>Legal</p>
                    <ul>
                        <li>
                        <a href="/privacy">Privacy Policy</a>
                        </li>
                        <li>
                        <a href="/employee-privacy">Employee Privacy Policy</a>
                        </li>
                        <li>
                        <a href="/enduser_tos">End User ToS</a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                    <p>Consumers</p>
                    <ul>
                        <li>
                        <a href="https://psu.truelayer.com" target="_blank">Consumer Portal</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div id="sub-footer" className="container-fluid">
                <div className="row text-center">
                <div id="social" className="container">
                    <div className="col-lg-12">
                    <a href="https://www.facebook.com/TrueLayerAPI/" target="_blank" className="social-link facebook"></a>
                    <a href="https://twitter.com/truelayer" target="_blank" className="social-link twitter"></a>
                    <a href="https://blog.truelayer.com/" target="_blank" className="social-link medium"></a>
                    <a href="https://www.linkedin.com/company/17954388/" target="_blank" className="social-link linkedin"></a>
                    <a href="https://www.youtube.com/channel/UCgCJvUI1ViLmlNzwPoRjcTw" target="_blank" className="social-link youtube"></a>
                    </div>
                </div>
                </div>

                <div className="row text-center">
                <div className="col-lg-12">
                    <p className="pb-0;">
                        {`© TrueLayer Limited ${new Date().getFullYear()}`}
                    <script type="text/JavaScript">
                    var theDate= new Date();
                    document.write("© TrueLayer Limited " + theDate.getFullYear());
                    </script>
                    </p>
                    <div className="container">
                    <div className="row">
                        <div className="col-10 mb-5 col-centered">
                        <p>TrueLayer is regulated by the UK Financial Conduct Authority under the Payment Services Regulations 2017 as an Authorised Payment
                        Institution to provide account information services and payment initiation services (Firm Reference Number: 793171).</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}