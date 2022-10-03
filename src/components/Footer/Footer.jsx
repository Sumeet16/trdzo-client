import React from 'react'
import "./Footer.css"
import { UilEnvelopeDownload } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_contact_section">
                    <div className="row_1">
                        <UilPhoneAlt className="footer_icon" />
                        <div className="inner_div">
                            <p className="bold">Telegram</p>
                            <p className="number">https://t.me/trdzo</p>
                        </div>
                    </div>
                    <div className="row_1">
                        <UilEnvelopeDownload className="footer_icon" />
                        <div className="inner_div">
                            <p className="bold">Mail Us</p>
                            <p className="number">mail@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="line_through"></div>
                <div className="site_description">
                    <div className="logo">TRDZO<span className='dot'>.</span></div>
                    <div className="site_disc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed, eum eius molestiae inventore, earum vitae accusantium deserunt dignissimos, voluptatem adipisci soluta incidunt! Incidunt mollitia laboriosam in saepe officia fuga!</p></div>
                    <div className="social_links">
                        <h2 className='follow_us_header'>Follow Us</h2>
                        <div className="social_container">
                            <div className="facebook">
                                <a href="#" className='social_a'><UilFacebookF className="social_media_icon" /></a>
                            </div>
                            <div className="twitter">
                                <a href="#" className='social_a'><UilTwitter className="social_media_icon" /></a>
                            </div>
                            <div className="youtube">
                                <a href="#" className='social_a'><UilYoutube className="social_media_icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="usefull_links">
                    <h2 className='footer_bar'>Useful Link</h2>

                    <div className="links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Courses</a>
                        <a href="#">Blogs</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="copyright_bar">
                    <p className="copyright_text">Copyright @ 2022, All Right Reserved <a href='#'>TRDZO</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer