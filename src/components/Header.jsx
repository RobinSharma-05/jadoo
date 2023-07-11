import React from 'react'
import traveller_girl from '../assets/png/traveller_girl.png'
import line from '../assets/png/line.png'
import play_btn from '../assets/svg/play_btn.svg'
import airoplane from '../assets/svg/airoplane.svg'

const Header = () => {
    return (
        <div className='pt-5 mt-5'>
            <div className="row">
                <div className="col-lg-6 col-12" data-aos="fade-right" data-aos-delay="100" data-aos-duration="700">
                    <h2 className='h2-text-color ff-poppins fw-700 fs-20'>
                        Best Destinations around the world
                    </h2>
                    <div className='position-relative mt-4'>
                        <h1 className='ff-volkhov fw-700 fs-84 mx-w-600 z-1 position-relative'>
                            Travel, enjoy
                            and live a new
                            and full life
                        </h1>
                        <img className='position-absolute line-image' src={line} alt="" />
                    </div>
                    <p className='ff-poppins fw-500 fs-16 mx-w-477 grey-color mb-5'>Built Wicket longer admire do barton vanity itself do in it.
                        Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div className='d-flex gap-md-4 ga-2'>
                        <p><a href="" className='btn-2 fw-500 fs-18'>Find out more</a></p>
                        <p><a href="" className='d-flex grey-color ff-poppins fw-500 fs-17 '><img className='mt_-100' src={play_btn} alt="" />Play Demo</a></p>
                    </div>
                </div>
                <div className="col-lg-6 col-12 position-relative" data-aos="fade-left" data-aos-delay="100" data-aos-duration="700">
                    <img className='position-absolute airoplane-1 w-25' src={airoplane} alt="" />
                    <img className='position-absolute airoplane-2 w-25' src={airoplane} alt="" />
                    <img className='w-100 w-1000 girl-image' src={traveller_girl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header