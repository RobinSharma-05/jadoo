import React from 'react'
import section6_1st from '../assets/png/section6_1st.png'
import section6_2nd from '../assets/png/section6_2nd.png'
import section6_3rd from '../assets/png/section6_3rd.png'
import section6_4th from '../assets/png/section6_4th.png'
import section6_5th from '../assets/png/section6_5th.png'

const Section5 = () => {
    return (
        <div className='pt-5 pb-5'>
            <div className='row justify-content-center' data-aos="fade-down" data-aos-delay="200"
                data-aos-duration="1000">
                <div className='col-xl-2 col-lg-3 col-md-4 col-6 greyscale_hover mb-5 mt-1 pointer_cursor'>
                    <img src={section6_1st} alt="" />
                </div>
                <div className='col-xl-2 col-lg-3 col-md-4 col-6 greyscale_hover mb-5 mt-1 pointer_cursor'>
                    <img src={section6_2nd} alt="" />
                </div>
                <div className='col-xl-2 col-lg-3 col-md-4 col-6 greyscale_hover mb-5 mt-1 pointer_cursor'>
                    <img src={section6_3rd} alt="" />
                </div>
                <div className='col-xl-2 col-lg-3 col-md-4 col-6 greyscale_hover mb-5 mt-3 pointer_cursor'>
                    <img src={section6_4th} alt="" />
                </div>
                <div className='col-xl-2 col-lg-3 col-md-4 col-6 greyscale_hover mb-5 mt-3 pointer_cursor'>
                    <img src={section6_5th} alt="" />
                </div>
                <div className='col-xl-2 col-lg-3 col-md-4 col-6 greyscale_hover mb-5 mt-3 ms_-4 pointer_cursor'>
                    <img src={section6_4th} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section5