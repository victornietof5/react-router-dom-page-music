import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/Footer'
import { Container, Form, Button } from 'react-bootstrap'
import styles from './join.module.css'

export const Join = () => {
    return (<>
        <Menu />
        <Container>
            <h1 className='text-white display-5 '> Join the <span className={styles.span}>fun.</span> </h1>
            <Form className='text-white'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
        <Footer />
    </>
    )
}

