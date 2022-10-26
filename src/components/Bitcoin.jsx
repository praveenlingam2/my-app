import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'

function Bitcoin() {
    // let bt =[];
    const [bitcoins, setbitcoins]=useState("");
    const getBitcoin=()=>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((response)=>{
            console.log("res===",response);
            setbitcoins({
                code:response.data.bpi.EUR.code,
                symbol:response.data.bpi.EUR.symbol,
                rate: response.data.bpi.EUR.rate,
                description: response.data.bpi.EUR.description
            });
        })
    }
  return (
    <div>
                        <Card style={{ width: '18rem' }}>
                        <Card.Body >
                            <Card.Title>BitCoin</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{bitcoins.code}</Card.Subtitle>
                            <Card.Text >
                            </Card.Text>
                            <Card.Text>
                                {bitcoins.rate}
                            </Card.Text>
                            <Card.Text>
                                {bitcoins.description}
                            </Card.Text>
                            <Button type='button' className='btn btn-primary' onClick={getBitcoin}>BitCoin</Button>
                        </Card.Body>
                    </Card>
                
            
    </div>
   
  )
}

export default Bitcoin