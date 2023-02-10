import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import more from '../assets/more.svg'
import albums from '../assets/albums.svg'
import microphone from '../assets/microphone.svg'
import covers from '../assets/covers.jpg'
import styles from './discover.module.css'

export const Discover = () => {
    return (<>
        <Menu />
        <section>
            <Container fluid='xs'>

                <Row>
                    <Col className='text-white'>
                        <h1 className='display-2 m-4 '> Discover new music </h1>
                        <Row >
                            <Col>
                                <div className={styles.divIcons}><img src={microphone} alt='' />
                                    <p>Charts</p></div>
                            </Col>
                            <Col>
                                <div className={styles.divIcons}><img src={albums} alt='' />
                                    <p>Albums</p></div>
                            </Col>
                            <Col>
                                <div className={styles.divIcons}><img src={more} alt='' />
                                    <p>More</p></div>
                            </Col>
                        </Row>
                        <p> By joining you can benefit by listening to the latest
                            album released.
                        </p>
                    </Col>
                    <Row>
                        <Col xs={2}>
                            <img src={covers} alt='' style={{ width: '300px' }} />
                        </Col>
                    </Row>
                </Row>
                < Footer />
            </Container>
        </section>
    </>
    )
}
