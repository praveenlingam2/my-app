import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import Bitcoin from './Bitcoin';


function ComedyAPI() {
    const [joke, setjoke]=useState("");

    const getJoke=()=>{
        axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
          console.log(response);
          setjoke({setup:response.data.setup,
                   punchline:response.data.punchline
                  });
        })
      }
  return (
    <div>
        {/* <button className='btn' onClick={getJoke}>Get Joke</button>{'\n'}
      {joke} */}
           
            <Card style={{ width: '18rem' }}>
                        <Card.Body >
                            <Card.Title>Comedy</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{joke.setup}</Card.Subtitle>
                            <Card.Text >
                            </Card.Text>
                            <Card.Text>
                                {joke.punchline}
                            </Card.Text>
                            <Button type='button' className='btn btn-primary' onClick={getJoke}>Get Joke</Button>
                        </Card.Body>
                    </Card>
    
                
    </div>
  )
}

export default ComedyAPI