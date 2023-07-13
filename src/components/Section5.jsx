import React from 'react'
import section6_1st from '../assets/png/section6_1st.png'
import section6_2nd from '../assets/png/section6_2nd.png'
import section6_3rd from '../assets/png/section6_3rd.png'
import section6_4th from '../assets/png/section6_4th.png'
import section6_5th from '../assets/png/section6_5th.png'
import { Col, Row } from 'react-bootstrap'

const Section5 = () => {
    return (
        <div className='pt-5 pb-5'>
            <Row className='justify-content-center' data-aos="fade-down" data-aos-delay="200"
                data-aos-duration="1000">
                <Col xl={2} lg={3} md={4} className='greyscale_hover mb-5 mt-1 pointer_cursor justify-content-center d-flex d-md-block'>
                    <img src={section6_1st} alt="" />
                </Col>
                <Col xl={2} lg={3} md={4} className='greyscale_hover mb-5 mt-1 pointer_cursor justify-content-center d-flex d-md-block'>
                    <img src={section6_2nd} alt="" />
                </Col>
                <Col xl={2} lg={3} md={4} className='greyscale_hover mb-5 mt-1 pointer_cursor justify-content-center d-flex d-md-block'>
                    <img src={section6_3rd} alt="" />
                </Col>
                <Col xl={2} lg={3} md={4} className='greyscale_hover mb-5 mt-3 pointer_cursor justify-content-center d-flex d-md-block'>
                    <img src={section6_4th} alt="" />
                </Col>
                <Col xl={2} lg={3} md={4} className='greyscale_hover mb-5 mt-3 pointer_cursor justify-content-center d-flex d-md-block'>
                    <img src={section6_5th} alt="" />
                </Col>
                <Col xl={2} lg={3} md={4} className='greyscale_hover mb-5 mt-3 ms_-4 pointer_cursor justify-content-center d-flex d-md-block'>
                    <img src={section6_4th} alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default Section5