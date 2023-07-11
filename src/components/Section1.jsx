import React from 'react'
import section2_1st from '../assets/svg/section2_1st.svg'
import section2_2nd from '../assets/png/section2_2nd.png'
import section2_3rd from '../assets/svg/section2_3rd.svg'
import section2_4th from '../assets/svg/section2_4th.svg'
import hidden_red_image from '../assets/svg/hidden_red_image.svg'
import section2_overflow_image from '../assets/svg/section2_overflow_image.svg'

const Section1 = () => {
    return (
        <div className='pt-5 mt-5 position-relative'>
            <img className='position-absolute section2-overflow d-none d-xxl-block' src={section2_overflow_image} alt="" />
            <div className='text-center' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700">
                <p className='ff-poppins fw-600 fs-18 grey-color'>CATEGORY</p>
                <h3 className='ff-volkhov fw-700 fs-50'>We Offer Best Services</h3>
            </div>
            <div className="row mt-5 pt-5 justify-content-center">
                <div className='col-12 col-sm-6 col-md-4 col-lg-3' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='card-1 pb-3 mb-5'>
                        <img className='position-absolute hidden_red_image w-30' src={hidden_red_image} alt="" />
                        <img src={section2_1st} alt="" />
                        <p className='ff-opensans fw-600 fs-20 mt-4'>Calculated Weather </p>
                        <p className='mx-w-181 mx-auto ff-poppins fw-500 fs-16 grey-color'>Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='card-1 pb-3 mb-5'>
                        <img className='position-absolute hidden_red_image w-30' src={hidden_red_image} alt="" />
                        <img src={section2_2nd} alt="" />
                        <p className='ff-opensans fw-600 fs-20 mt-4'>Best Flights</p>
                        <p className='mx-w-181 mx-auto ff-poppins fw-500 fs-16 grey-color'>Engrossed listening. Park gate sell they west hard for the.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-up"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='card-1 pb-3 mb-5'>
                        <img className='position-absolute hidden_red_image w-30' src={hidden_red_image} alt="" />
                        <img src={section2_3rd} alt="" />
                        <p className='ff-opensans fw-600 fs-20 mt-4'>Local Events</p>
                        <p className='mx-w-181 mx-auto ff-poppins fw-500 fs-16 grey-color'>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <div className='card-1 pb-3 mb-5'>
                        <img className='position-absolute hidden_red_image w-30' src={hidden_red_image} alt="" />
                        <img src={section2_4th} alt="" />
                        <p className='ff-opensans fw-600 fs-20 mt-4'>Customization</p>
                        <p className='mx-w-181 mx-auto ff-poppins fw-500 fs-16 grey-color'>We deliver outsourced
                            aviation services for
                            military customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Section1