import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar color="faded" dark className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <NavbarBrand href="/">Welcome</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/julien-gakpe-9b370855/">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Get to know me
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="#SplitScreen">
                  Formation
                </DropdownItem>
                <DropdownItem href="#Vita">
                  Projets
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText> J. GAKPE - Enthusiat French Freelance </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default AppNavbar;
