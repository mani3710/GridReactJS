import React, { Component } from 'react';
import ProgrammingIMG from '../Assets/programming.jpg';
import MobileIMG from '../Assets/mobileIMG.jpg';
import MarketingIMG from '../Assets/marketingIMG.jpg';
import './index.css';

export default class index extends Component {

    render() {
        return (
            <div className="main-body">
                {/* Header Component */}
                <header id="showcase" className="grid">
                    <div className="bg-image"></div>
                    <div className="content-wrap">
                        <h1>Welcome to ImpactSMS Solution</h1>
                        <p> Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                            The different areas of web design include web graphic design; interface design.
                    </p>
                        <a href="#section-b" className="btn">Read More</a>
                    </div>
                </header>

                {/* Main Container */}
                <main>
                    <section id='section-a' className="grid">
                        <div className="content-wrap">
                            <h2 className="content-title" >Web & Application Development</h2>
                            <div className="content-text">
                            <p> Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                            The different areas of web design include web graphic design; interface design; authoring,
                            including standardised code and proprietary software; user experience design and search engine
                            optimization.</p>
                            </div>
                        </div>
                    </section>
                    <section id='section-b' className='grid'>
                        <ul>
                            <li>
                                <div className="card">
                                    <img src={ProgrammingIMG} alt="Programming "></img>
                                    <div className="card-content">
                                        <h3>Web Development</h3>
                                        <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                         The different areas of web design include web graphic design; interface design; authoring.
                                         
                               </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img src={MobileIMG} alt="Programming "></img>
                                    <div className="card-content">
                                        <h3>Mobile Applications</h3>
                                        <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                         The different areas of web design include web graphic design; interface design; authoring.
                                          
                               </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card">
                                    <img src={MarketingIMG} alt="Programming "></img>
                                    <div className="card-content">
                                        <h3>Tec Marketing</h3>
                                        <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                         The different areas of web design include web graphic design; interface design; authoring.
                               </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* section-c */}
                    <section className="grid" id="section-c">
                        <div className="content-wrap">
                            <h2>We handle all of your digital needs</h2>
                            <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                                 The different areas of web design include web graphic design; interface design; authoring,
                                                 including standardised code and proprietary software; user experience design and search engine
                                                  optimization.
                                          </p>
                        </div>
                    </section>

                    {/* section-d */}
                    <section id="section-d" className="grid">
                        <div className="box">
                            <h2 className="content-title">Contact Us</h2>
                            <p>
                                Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                                           The different areas of web design include web graphic design; interface design authoring.
                                                           
                      </p>
                            <p>contact@impactsms.com</p>
                        </div>
                        <div className="box">
                            <h2 className="content-title">About Our Company</h2>
                            <p>
                                Web design encompasses many different skills and disciplines in the production and maintenance of websites.
                                                           The different areas of web design include web graphic design; interface design; authoring,
                                                           including standardised code and proprietary software; user experience design and search engine
                                                            optimization.
                      </p>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="grid" id='main-footer'>
                    <div>Impactsms Solution</div>
                    <div>Project by <span style={{ fontSize: "20", fontWeight: "bold",color:"#2690d4" }}>ManiKandan E</span></div>
                </footer>

            </div>
        );
    }
}
