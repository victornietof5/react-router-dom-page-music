import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/footer'
import { Container, Form, Button,  } from 'react-bootstrap'
import styles from './join.module.css'


export const Join = () => {
  return (<>
    <Menu />
    <>
     <Container  className="d-sm-flex align-items-center justify-content" style={{marginTop: '50px', minWidth: '400px',maxWidth:'800px'}}>
     <h1 className={styles.h1}> Join the <span style={{color: '#bc3a80'}}>fun.</span></h1>
     <Form className={styles.form}>
     <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label>Name:</Form.Label>
         <Form.Control style={{background: '#202027', border: '1px solid #2F303A' }} type="text"/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email:</Form.Label>
         <Form.Control style={{background: '#202027', border: '1px solid #2F303A' }} type="email"/>      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password:</Form.Label>
        <Form.Control style={{background: '#202027', border: '1px solid #2F303A' }} type="password"/>
       </Form.Group>
       <Button variant="primary" type="submit" style={{width: '100%'}} >Join Now</Button>
   </Form>
    </Container>     <Footer/>
     </>
    </>
)
}

// import React from 'react'
// import  Footer  from '../components/footer';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import {Container} from 'react-bootstrap';



// type Props = {}


// const Join = (props: Props) => {
//   return (
//     <>
//     <Container  className="d-sm-flex align-items-center justify-content" style={{marginTop: '50px', minWidth: '400px',maxWidth:'800px'}}>
//     <h1 style={{fontWeight: 'bold', fontSize: '4rem'}}>Join the <span style={{color: '#bc3a80'}}>fun.</span></h1>
//     <Form style={{background: '#202027', width: '80%', borderRadius: '20px', padding: 20}}>
//     <Form.Group className="mb-3" controlId="formBasicText">
//         <Form.Label>Name:</Form.Label>
//         <Form.Control style={{background: '#202027', border: '1px solid #2F303A' }} type="text"/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email:</Form.Label>
//         <Form.Control style={{background: '#202027', border: '1px solid #2F303A' }} type="email"/>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password:</Form.Label>
//         <Form.Control style={{background: '#202027', border: '1px solid #2F303A' }} type="password"/>
//       </Form.Group>
//       <Button variant="primary" type="submit" style={{width: '100%'}} >Join Now</Button>
//     </Form>
//     </Container>
//     <Footer/>
//     </>
//   )
// }
// export default Join;


