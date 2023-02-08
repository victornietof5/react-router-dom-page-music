import React from 'react'
import Menu from '../components/menu'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import FeelTheMusic from '../components/FeelTheMusic'
import styles from '../components/FeelTheMusic.module.css'






export const SoundWave = () => {
  return (

<>
         <Menu />
      <Container fluid='md' className='align-xs-middle fixed-bottom'>
        
        <FeelTheMusic />
      </Container>
      <div  className={styles.purple}></div>
        <div  className={styles.azul1}></div>
        <div  className={styles.azul2}></div>
      </>
 
    





  )
}
