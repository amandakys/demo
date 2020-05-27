import React from "react";
import logo from '../truelayer-logo.svg';
import dataApi from '../data-api.svg';
import paymentsApi from '../payments-api.svg';

export const Navbar = () => {
  return (
    <div className="press pb-5">
        <div className="customers-hero-img position-relative">
            <div className="row">
                <div id="icons-list" className="icons-container"></div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} height="50px" alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-parent">Products</a>
                                <ul className="dropdown-child box-shadow" role="menu">
                                    <div className="dropdown-arrow"></div>
                                    <li className="product-dropdown">
                                        <a href="/data-api" className="nav-product">
                                            <img src={dataApi} alt="Data API" width="70%"/>
                                            <span>Data API</span>
                                            <span className="availability">&nbsp;</span>
                                        </a>
                                        <a href="/payments-api" className="nav-product">
                                            <img src={paymentsApi} alt="Payments API" width="70%"/>
                                            <span className="nav-product-payments">Payments API</span>
                                            <span className="availability">&nbsp;</span>
                                        </a>
                                    </li>
                                    <li className="secondary">
                                        <a href="/openbanking"><i className="fas fa-file-alt" aria-hidden="true"></i>Open Banking</a>
                                        <a href="/psd2"><i className="fas fa-file-alt" aria-hidden="true"></i>PSD2</a>
                                        <a href="/security"><i className="fa fa-lock" aria-hidden="true"></i>Security</a>
                                        <a href="#" ><i className="fa fa-globe" aria-hidden="true"></i>Market Coverage</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-parent">Pricing</a>
                                <ul className="dropdown-child box-shadow" role="menu">
                                    <div className="dropdown-arrow"></div>
                                    <li>
                                        <a href="/data-api/#pricing-data"><i className="fas fa-fingerprint" aria-hidden="true"></i>Data API</a>

                                        <a href="/payments-api/#pricing-payments"><i className="fas fa-pound-sign" aria-hidden="true"></i>Payments API</a>

                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-parent">Developers</a>
                                <ul className="dropdown-child box-shadow" role="menu">
                                    <div className="dropdown-arrow"></div>
                                    <li>
                                        <a href="http://docs.truelayer.com" target="_blank"><i className="fa fa-book" aria-hidden="true"></i>Documentation</a>
                                        <ul>
                                            <li><a href="https://docs.truelayer.com/#getting-started" target="_blank">Getting started</a> <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
                                            <li><a href="https://docs.truelayer.com/#access-methods" target="_blank">Access Methods</a> <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
                                            <li><a href="https://docs.truelayer.com/#data-api-v1" target="_blank">Data API v1</a> <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
                                            <li><a href="https://docs.truelayer.com/#payments-api-v1" target="_blank">Payments API v1</a> <i className="fa fa-chevron-right" aria-hidden="true"></i></li>
                                            <li><a href="https://docs.truelayer.com/#status-api-v1" target="_blank">Status API v1</a> <i className="fa fa-chevron-right" aria-hidden="true"></i></li>

                                        </ul>
                                    </li>
                                    <li className="secondary">
                                        <a href="https://console.truelayer.com"><i className="fa fa-code" aria-hidden="true"></i>Console</a>
                                        <a href="https://demo.truelayer.com" target="_blank"><i className="fa fa-desktop" aria-hidden="true"></i>Demo Application</a>
                                        <a href="https://status.truelayer.com/" target="_blank"><i className="fas fa-chart-line" aria-hidden="true"></i>Status Page</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a href="/customers" className="nav-link">Customers</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link nav-link-parent">Company</a>
                                <ul className="dropdown-child box-shadow" role="menu">
                                    <div className="dropdown-arrow"></div>
                                    <li>
                                        <a href="/about"><i className="fa fa-building" aria-hidden="true"></i>About TrueLayer</a>
                                        <a href="/contact"><i className="fa fa-envelope" aria-hidden="true" ></i>Contact us</a>
                                        <a href="https://blog.truelayer.com/" target="_blank"><i className="fas fa-pencil-alt" aria-hidden="true"></i>Blog</a>
                                    </li>
                                    <li className="secondary">

                                        <a href="https://truelayer.workable.com"  target="_blank">
                                            <i className="far fa-hand-peace" aria-hidden="true"></i>We are hiring!</a>
                                        <p className="menu-text">TrueLayer is always looking for passionate individuals. Join our team to make a difference and shape the new era of financial innovation.</p>
                                        <ul>
                                            <li>
                                                <a href="https://truelayer.workable.com"  target="_blank">See open positions</a> <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item support-padding">
                                <a className="btn btn-outline-white" href="http://support.truelayer.com" target="_blank">Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-white" href="https://console.truelayer.com/?auto=login" target="_blank">Log in<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container flex title-content">
                <div className="row">
                    <div className="col-md-6 col-lg-12">
                        <h1>Press</h1>
                        <h2 className="no-margin">TrueLayer in the news</h2>
                    </div>
                    <div className="col-md-7 col-lg-5">
                        <p className="light-weight header-paragraph">
                            Keep up to date with the lastest company announcements and news articles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
