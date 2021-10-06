import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-dark fixed-top bg-danger py-3" expand="md">
        <div className="container">
          <NavbarBrand className="navbar-brand fw-bold" href="/">Web Center</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="#learn" className="nav-link text-light px-md-3">Courses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#faq" className="nav-link text-light px-md-3">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#instructors" className="nav-link text-light px-md-3">Instructors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact-us" className="nav-link text-light px-md-3">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavMenu;