import React from 'react'
import landing from '../assets/landing-page-girl.png'
import { Container, Row, Col} from "react-bootstrap";
import JoinButton from '../components/JoinButton'

export const FellTheMusic = () => {
    return (
        <Container>
            <Row  style={{ width: '100%', height: '100%', marginLeft:'70px'}}  className="d-flex align-items-end">
                <Col lg={4}>
                    <img src={landing} alt=''width={328} />
                </Col>
                <Col lg={8} className='text-white'>
                    <h1> Feel The Music</h1>
                    <p> Stream over 20 thousand songs with one click! </p>
                    <JoinButton/>
                </Col>
            </Row>
        </Container>
    )
}

export default FellTheMusic
