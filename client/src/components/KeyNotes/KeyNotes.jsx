import React from 'react'
import "./KeyNotes.css"
import image1 from "../../assets/img/icons/layer-group-solid.svg"
import image2 from "../../assets/img/icons/algolia-brands.svg"
import image3 from "../../assets/img/icons/air-freshener-solid.svg"
import image4 from "../../assets/img/icons/address-card-solid.svg"
import image5 from "../../assets/img/icons/address-card-solid.svg"
import image6 from "../../assets/img/icons/address-card-solid.svg"
import Course from '../Course/Course'

const KeyNotes = () => {
    return (
        <>

            <section class="service-area grey-bg pb-70 pt-100" id='keynote'>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 text-center mb-40">
                            <div class="section-title service-title">
                                <h2 className='title'>Our Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,words which don't look even slightly believable.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image1} alt="Designs & interfaces" />
                                </div>

                                <h4>Designs & interfaces</h4>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                <a href="../services/designs_interfaces.html">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image2} alt="Faster More  Then Speed" />
                                </div>

                                <h4>Faster More  Then Speed</h4>
                                <p>Condimentum consectetur quaerat parturient denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                <a href="../services/faster_speed.html">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image3} alt="Highly customizable" />
                                </div>

                                <h4>Highly customizable</h4>
                                <p>Highly customizable parturient denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                <a href="../services/highly_customizable.html">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image6} alt="Official Support" />
                                </div>

                                <h4>Official Support</h4>
                                <p>Dedicated support quaerat parturient denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                <a href="../services/official_support.html">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image5} alt="Responsive design" />
                                </div>

                                <h4>Responsive design</h4>
                                <p>Responsive design parturient denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                <a href="../services/responsive_design.html">Read More</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 text-center mb-30">
                            <div class="features-wrap">

                                <div class="features-icon">
                                    <img src={image4} alt="Themes & plugins" />
                                </div>

                                <h4>Themes & plugins</h4>
                                <p>Features & plugins parturient denouncing pleasure and praising pain was born and I will give you a complete.</p>
                                <a href="../services/themes_plugins.html">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner_quote">
                    <p>An investment in knowledge always pay the best interest.</p>
                    <a href="#" class="btn">View Courses</a>
                </div>
            </section>
        </>
    )
}

export default KeyNotes