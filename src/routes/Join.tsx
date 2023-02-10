import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/Footer'
import { Container, Form, Button, } from 'react-bootstrap'
import styles from './join.module.css'

export const Join = () => {
    return (<>
        <Menu />
        <>
            <Container className="d-sm-flex align-items-center justify-content-center" style={{ marginTop: '50px', minWidth: '400px', maxWidth: '800px' }}>
                <h1 className={styles.h1}> Join the <span className={styles.span}>fun.</span></h1>
                <Form className={styles.form}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control className={styles.textinput} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control className={styles.textinput} type="email" />      </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control className={styles.textinput} type="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ width: '100%' }} >Join Now</Button>
                </Form>
                <Footer />
            </Container>
            <div className={styles.purple}></div>
            <div className={styles.azul1}></div>
        </>
    </>
    )
};

