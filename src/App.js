
import Sidebar from './components/Sidebar';
import "./App.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AirportShuttleOutlinedIcon from '@material-ui/icons/AirportShuttleOutlined';
import { SideNav, Chevron, Icon } from 'react-side-nav';




//  const menuItems = [
//       { id: 1,
//         label: 'Item 1',
//         icon: 'fas fa-battery-half',
//         items: [
//           { id: 11,
//             label: 'Item 1.1',
//             icon: 'fas fa-car',
//             link: '/item11',
//           },
//           { id: 12,
//             label: 'Item 1.2',
//             icon: 'fas fa-bullhorn',
//             link: '/item12',
//           },
//         ],
//       },
//     ];


//     const NavLink = props => (<Link to={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</Link>);

//     // const NavLink = props => (<a href={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</a>);




function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" style={{padding:10}}>
      
        <Navbar.Brand href="#home">Revenue Mobilization System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',}}/>
        <Navbar.Collapse id="basic-navbar-nav">
        <div
      
    >
          <Nav className="me-auto" style={{
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        //height: '100vh',
      }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
    
    </Navbar>
   
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">Motorist</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Porters</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Tolls</Nav.Link>
      </Nav.Item>
    </Nav>

    

     
        <InputGroup>
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-secondary">Search</Button>

            <Button variant="primary" size="sm" style={{padding:10}}>
              New Registration
            </Button>
          </InputGroup>
                
         
   
    <div className='container'>
            < Sidebar />
          </div>




    <Container style={{
        // flex:true,
        display: 'flex',
        height: '100vh'}}  > 
      
        <Table striped bordered >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Sticker</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><Button variant="primary" size="sm" style={{padding:10}}>
              Sticker
            </Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
              <Button variant="primary" size="sm" style={{padding:10}}>
              Sticker
            </Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        
    </Container>


    </div>
  );
}

export default App;
