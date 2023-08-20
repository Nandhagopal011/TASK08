import React from 'react'
import Card from 'react-bootstrap/Card';

export const VisitPlace = () => {
  return (
    
       <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/4430322/pexels-photo-4430322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>GOA PACKAGE</Card.Title>
              <Card.Text>
               GOA PACKAGES HOLIDAYS ONLY
              </Card.Text>
             </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/1305603/pexels-photo-1305603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>LADAKH PACKAGES</Card.Title>
              <Card.Text>
              LADAKH 
              </Card.Text>
             </Card.Body>
          </Card>
    
         
        </div>

    
  )
}
