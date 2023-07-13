import React from 'react'
import section3_1st from '../assets/png/section3_1st.png'
import section3_2nd from '../assets/png/section3_2nd.png'
import section3_3rd from '../assets/png/section3_3rd.png'
import { Col, Row } from 'react-bootstrap'

const Section2 = () => {
    return (
        <div className='pt-5 mt-5'>
            <div className='text-center' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700">
                <p className='ff-poppins fw-600 fs-18 grey-color'>Top Selling</p>
                <p className='ff-volkhov fw-700 fs-50 mb-5'>Top Destinations</p>
            </div>
            <Row className="justify-content-center">
                <Col lg={4} sm={6} data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="700">
                    <img className='w-100 h-75' src={section3_1st} alt="" />
                    <div className='d-flex card-2 justify-content-between pb-3'>
                        <div className='pt-3 ps-3'>
                            <p className='ff-poppins fw-500 fs-18 grey-color'>Rome, Italty</p>
                            <div className='d-flex gap-3'>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0686 2.76033L11.1936 17.7603C11.136 17.886 11.0385 17.989 10.9162 18.0533C10.7939 18.1177 10.6537 18.1396 10.5176 18.1158C10.3814 18.092 10.2571 18.0237 10.1639 17.9217C10.0706 17.8197 10.0139 17.6896 10.0024 17.5519L9.4212 10.579L2.44826 9.99771C2.31054 9.98627 2.1805 9.92951 2.07847 9.8363C1.97644 9.7431 1.90818 9.61871 1.88436 9.48258C1.86054 9.34646 1.8825 9.20628 1.94682 9.08397C2.01113 8.96166 2.11417 8.86411 2.23982 8.80658L17.2398 1.93158C17.3558 1.87844 17.4852 1.86205 17.6108 1.88461C17.7363 1.90718 17.852 1.96762 17.9422 2.05781C18.0323 2.14801 18.0928 2.26365 18.1154 2.38919C18.1379 2.51474 18.1215 2.64418 18.0684 2.76014L18.0686 2.76033Z" fill="#080809" />
                                    </svg>
                                </span>
                                <p className='ff-poppins fs-500 fs-16 grey-color'>10 Days Trip</p>
                            </div>
                        </div>
                        <p className='ff-poppins fw-500 fs-18 grey-color pe-4 pt-3'>$5,42k</p>
                    </div>
                </Col>
                <Col lg={4} sm={6} data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="700">
                    <img className='w-100 h-75' src={section3_2nd} alt="" />
                    <div className='d-flex card-2 justify-content-between pb-3'>
                        <div className='pt-3 ps-3'>
                            <p className='ff-poppins fw-500 fs-18 grey-color'>London, UK</p>
                            <div className='d-flex gap-3'>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0686 2.76033L11.1936 17.7603C11.136 17.886 11.0385 17.989 10.9162 18.0533C10.7939 18.1177 10.6537 18.1396 10.5176 18.1158C10.3814 18.092 10.2571 18.0237 10.1639 17.9217C10.0706 17.8197 10.0139 17.6896 10.0024 17.5519L9.4212 10.579L2.44826 9.99771C2.31054 9.98627 2.1805 9.92951 2.07847 9.8363C1.97644 9.7431 1.90818 9.61871 1.88436 9.48258C1.86054 9.34646 1.8825 9.20628 1.94682 9.08397C2.01113 8.96166 2.11417 8.86411 2.23982 8.80658L17.2398 1.93158C17.3558 1.87844 17.4852 1.86205 17.6108 1.88461C17.7363 1.90718 17.852 1.96762 17.9422 2.05781C18.0323 2.14801 18.0928 2.26365 18.1154 2.38919C18.1379 2.51474 18.1215 2.64418 18.0684 2.76014L18.0686 2.76033Z" fill="#080809" />
                                    </svg>
                                </span>
                                <p className='ff-poppins fs-500 fs-16 grey-color'>12 Days Trip</p>
                            </div>
                        </div>
                        <p className='ff-poppins fw-500 fs-18 grey-color pe-4 pt-3'>$4.2k</p>
                    </div>
                </Col>
                <Col lg={4} sm={6} data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="700">
                    <img className='w-100 h-75' src={section3_3rd} alt="" />
                    <div className='d-flex card-2 justify-content-between pb-3'>
                        <div className='pt-3 ps-3'>
                            <p className='ff-poppins fw-500 fs-18 grey-color'>Full Europe</p>
                            <div className='d-flex gap-3'>
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.0686 2.76033L11.1936 17.7603C11.136 17.886 11.0385 17.989 10.9162 18.0533C10.7939 18.1177 10.6537 18.1396 10.5176 18.1158C10.3814 18.092 10.2571 18.0237 10.1639 17.9217C10.0706 17.8197 10.0139 17.6896 10.0024 17.5519L9.4212 10.579L2.44826 9.99771C2.31054 9.98627 2.1805 9.92951 2.07847 9.8363C1.97644 9.7431 1.90818 9.61871 1.88436 9.48258C1.86054 9.34646 1.8825 9.20628 1.94682 9.08397C2.01113 8.96166 2.11417 8.86411 2.23982 8.80658L17.2398 1.93158C17.3558 1.87844 17.4852 1.86205 17.6108 1.88461C17.7363 1.90718 17.852 1.96762 17.9422 2.05781C18.0323 2.14801 18.0928 2.26365 18.1154 2.38919C18.1379 2.51474 18.1215 2.64418 18.0684 2.76014L18.0686 2.76033Z" fill="#080809" />
                                    </svg>
                                </span>
                                <p className='ff-poppins fs-500 fs-16 grey-color'>28 Days Trip</p>
                            </div>
                        </div>
                        <p className='ff-poppins fw-500 fs-18 grey-color pe-4 pt-3'>$15k</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Section2