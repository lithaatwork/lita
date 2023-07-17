import React from 'react'
import Container from '../components/Container'
import VisaTypes from './VisaTypes'

const Services = () => {
  return (
    <>
   
    <div
    style={ {backgroundImage: 'url(/flag.png)'}}
      className={`h-72 bg-no-repeat w-full `}
    ></div>
    <Container>
    <div> <h1>Our Services</h1></div>
      <VisaTypes/>


    </Container>

    </>
  )
}

export default Services