import React from 'react'
import landing from '../assets/landing-page-girl.png'
import { Row, Col } from "react-bootstrap";
import JoinButton from '../components/JoinButton'

export const FellTheMusic = () => {
    return (
        <>
        <div style={{ position: 'absolute', top: '18rem', left: '20rem', transform: 'translate(-30%, -30%)', height: '300px', width: '300px', backgroundColor: '#3457b21a', borderRadius: '50%', zIndex:'-1' }}></div>
        <div style={{ position: 'absolute', top: '25rem', left: '2rem', transform: 'translate(-30%, -30%)', height: '300px', width: '300px', backgroundColor: '#bc3a801a', borderRadius: '50%', zIndex:'-1' }}></div>
            <Row style={{ width: 'auto', height: 'auto', marginLeft: '20px', marginTop: '200px' }} className="d-flex align-items-center justify-content-center">
                <Col xl={4} className="d-none d-lg-block">
                    <img src={landing} alt='' width={340} />
                </Col>
                <Col xl={8} xs={8} className=' text-white ' >
                    <h1 className='xs display-1'> Feel The Music</h1>
                    <p> Stream over 20 thousand songs with one click! </p>
                    <JoinButton />
                </Col>
            </Row>
        </>
    )
}

export default FellTheMusic
