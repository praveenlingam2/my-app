import React from 'react'
import { Col } from 'react-bootstrap'
import Bitcoin from '../components/Bitcoin'
import ComedyAPI from '../components/ComedyAPI'

function ViewPage() {
  return (
    <div className='mt-5'>
    <div className='row' >
        <Col></Col>
        <Col className='text-center'>
        <ComedyAPI/>
        <div className='mt-5'>
        <Bitcoin/>
        </div>
    </Col>
        <Col></Col>
    </div>
    </div>
  )
}

export default ViewPage