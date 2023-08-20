import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {
  return (
    <Carousel data-bs-theme="successs" className='bg-success'>
      <Carousel.Item class="sm-container">
        <img
          className="d-block w-100 mt-1 rounded" style={{height:"580px"}}
          src='https://images.pexels.com/photos/17869859/pexels-photo-17869859/free-photo-of-ganges-coast-in-varanasi-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt="TAJ MAHAL"
        />
        <Carousel.Caption>
          <h3>KASHI VISHWANATH TAMPLE</h3>
          <p>VARANASI,INDIA</p>
        </Carousel.Caption>
        
      </Carousel.Item>

      <Carousel.Item >
        <img
          className="d-block w-100 mt-1 " style={{height:"580px"}}
          src="https://images.pexels.com/photos/3884492/pexels-photo-3884492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>I'M A BIG FAN OF AMSTERDAM</h3>
          <p>NETHERLAND</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/17852153/pexels-photo-17852153/free-photo-of-panorama-of-beyoglu-with-the-galata-tower-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{height:"580px"}} alt="Third slide"
        />
        <Carousel.Caption>
        <h3>GALATA TOWER</h3>
          <p>
            ISTANBUL
          </p>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          style={{height:"580px"}} alt="Third slide"
        />
        <Carousel.Caption>
        <h3>VELIGANDU ISLAND</h3>
    <p>
      MALDIVES
    </p>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}







