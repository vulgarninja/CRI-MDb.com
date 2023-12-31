import React from 'react'
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import crimdbLogo from "../images/logo.png"

export function Header(props) {
  // props.items is the value of nav state in App.js
  // create a collection of navigation items
  const Links = props.items.map((item, itemkey) => {
    return (
      <Nav.Link href={item.link} key={itemkey}> {item.label} </Nav.Link>
    )
  })
  // component for Account
  const Account = ( props ) => {
    if (props.user) {
      return (
        <NavDropdown title={ props.user.email }>
          <NavDropdown.Item href="/signout">Log out</NavDropdown.Item>
        </NavDropdown>
      )
    }
    else {
      return null
    }
  }

  return (
    <div className="NavBar">
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={crimdbLogo} alt="Logo" style={{ width: '200px', height: '100px'}}/></Navbar.Brand>
        <Nav>
          {Links}
          <Account />
          {<NavDropdown title={props.user.email}>
            <NavDropdown.Item href="/signout">Log out</NavDropdown.Item>
          </NavDropdown> }
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}