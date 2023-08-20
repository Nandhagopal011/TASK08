import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container,Button} from 'react-bootstrap';  

import { Link } from 'react-router-dom';

import {Routes,Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contacts } from './Components/Contacts'
import { VisitPlace} from './Components/VisitPlace';
import { TopPackages } from './Components/TopPackages';
import { SignIn } from './Components/SignIn';
function App()
{
return (    
   <div>
        <Navbar bg="primary sticky-xl-top" expand="md">  
        <Container>  
          <Navbar.Brand href="#home">TOURISM</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Nav className="ml-auto">  
                   <Link  to="/Home"><Button class="btn-outline-success"> HOME</Button></Link>
                   <Link to="/VisitPlace" ><Button class="btn-outline-success"> VisitPlace </Button></Link> 
                   <Link to="/TopPackages" ><Button class="btn-outline-success"> TopPackages</Button></Link>   
                   <Link to="/About" ><Button class="btn-outline-success"> ABOUT  </Button></Link>  
                   <Link  to="/Contacts"><Button class="btn-outline-success"> CONTECT </Button></Link>
                   <Button class="btn-outline-success"> SignIn </Button>
            </Nav>  
          </Navbar.Collapse> 
        </Container>  
      </Navbar> 
           <Routes>
                <Route path='/' element={<Home/>}/>  
                <Route path='/Home' element={<Home/>}/>
                <Route path='/VisitPlace' element={<VisitPlace/>}/>
                <Route path='/TopPackages' element={<TopPackages/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contacts' element={<Contacts/>}/>
                <Route path='/SingnIn' element={<SignIn/>}/>
              
         </Routes>
    </div> 
 
);
}  
   


export default App;
