import React from 'react'
import { Container } from 'react-bootstrap'
import logo_image from '../assets/svg/Logo_image.svg'

const Nav = () => {
    return (
        <div className='pt-5 pb-3'>
            <div>

                <nav>
                    <div>
                        <div className="d-flex align-items-center justify-content-between">
                            <a href="" className="pageLogo">
                                <img src={logo_image} alt="" />
                            </a>
                            <label for="menuIcon" className="">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                            <input type="checkbox" id="menuIcon" hidden className="d-none" />
                            <ul className="d-flex align-items-center gap-xl-5 gap-4 sm-screen mb-0">
                                <li><a href="" className='text-black google_regular'>Desitnations</a></li>
                                <li><a href="" className='text-black google_regular'>Hotels</a></li>
                                <li><a href="" className='text-black google_regular'>Flights</a></li>
                                <li><a href="" className='text-black me-lg-4 me-0 google_regular'>Bookings</a></li>
                                <li><a href="" className='text-black google_regular'>Login</a></li>
                                <li><a href="" className='text-black btn-1 d-inline-block google_regular'>Sign up</a></li>
                                <select name="language" id="language" className='border-0 bg-transparent google_regular'>
                                    <option value="En">En</option>
                                    <option value="HI">HI</option>
                                    <option value="SP">SP</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Nav