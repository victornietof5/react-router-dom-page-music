import React from 'react'
import { Row, Col } from "react-bootstrap";
import JoinButton from './JoinButton'
import styles from './FeelTheMusic.module.css'

export const FeelTheMusic = () => {
    return (
        <>
            <Row className="align-items-center">
                <Col className="d-none d-lg-block">
                    <div className={styles.girl}> </div>
                </Col>
                <Col className=' text-white ' >
                    <h1 className=' display-1 mb-4'> Feel The Music</h1>
                    <p className='mb-4'> Stream over 20 thousands songs with one click </p>
                    <JoinButton />
                </Col>
            </Row>
        </>
    )
}

export default FeelTheMusic


