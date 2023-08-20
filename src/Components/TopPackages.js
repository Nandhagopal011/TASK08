import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap';
    

export const TopPackages = () => {
  return (
   
    
    
        <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/4430322/pexels-photo-4430322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Card.Body>
              <Card.Title>GOA PACKAGE</Card.Title>
              <Card.Text>
               GOA PACKAGES HOLIDAYS ONLY
              </Card.Text>
              <Button variant="primary">VISIT</Button>
            </Card.Body>
          </Card>
    
         
        </div>
      );
      }