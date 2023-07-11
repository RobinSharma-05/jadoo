import React from 'react'
import slider_image from '../assets/svg/slider_image.svg'
import slider_btn from '../assets/svg/slider_btn.svg'

const Section4 = () => {
    return (
        <div className='pt-5 mt-5'>
            <div className='row pt-5'>
                <div className="col-lg-5 col-12" data-aos="fade-up-right" data-aos-delay="200"
                    data-aos-duration="1000">
                    <p className='ff-poppins fw-600 fs-18 grey-color'>Testimonials</p>
                    <h5 className='ff-volkhov fw-700 fs-50 mx-w-477'>What people say
                        about Us.</h5>
                    <img className='mt-5 pt-lg-5 pt-3 mb-lg-0 mb-5' src={slider_btn} alt="" />
                </div>
                <div className="col-lg-7 col-12" data-aos="fade-up-left" data-aos-delay="200"
                    data-aos-duration="1000">
                    <img className='w-100' src={slider_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section4