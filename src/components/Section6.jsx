import React from 'react'
import section2last_overflow_image from '../assets/svg/section2last_overflow_image.svg'
import second_last_inner_image_first from '../assets/png/second_last_inner_image_first.png'
import second_last_inner_image_two from '../assets/png/second_last_inner_image_two.png'
import last_second_section_airoplane from '../assets/svg/last_second_section_airoplane.svg'

const Section6 = () => {
    return (
        <div className='position-relative' data-aos="zoom-in" data-aos-delay="200"
            data-aos-duration="1500">
            <img className='second_last_image_first w-29 ' src={second_last_inner_image_first} alt="" />
            <img className='second_last_image_two w-25' src={second_last_inner_image_two} alt="" />
            <img className='second_last_image_airoplane d-none d-xl-block' src={last_second_section_airoplane} alt="" />
            <div className='bg_image'>
                <div className='pt-5'>
                    <h6 className='ff-poppins fw-600 fs-33 text-center mx-w-880 mx-auto grey-color pt-5'>
                        Subscribe to get information, latest news and other
                        interesting offers about Jadoo
                    </h6>
                </div>
                <div className='d-md-flex align-items-center gap- justify-content-center mt-5 pt-5 pb-5'>
                    <div className='d-flex align-items-center justify-content-start box-email mx-5'>
                        <span className='mx-3 mb-1'>
                            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6" stroke="#39425D" stroke-linecap="round" />
                                <rect x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D" />
                            </svg>
                        </span>
                        <input type="email" placeholder='Your email' className='ff-montserrat fw-400 fs-14 email'
                        />
                    </div>
                    <p className='mb-0 align-items-center justify-content-center d-flex mt-4 mt-md-0'>
                        <a href="" className='gradient_btn ff-opensans fw-600 fs-17'>Subscribe</a>
                    </p>
                </div>
            </div>

            <img className='second_last_overflow_image d-none d-xl-block' src={section2last_overflow_image} alt="" />

        </div>
    )
}

export default Section6