import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import LogInOut from "../auth/LogInOut";

const PrivateNavContainer = (props) => {
  const user = useSelector((state) => state.userdata.user);
  return user ? <NavContainer {...props} /> : null;
};

const NavContainer = ({ path, name }) => {
  return (
    <Nav.Item>
      <LinkContainer exact to={path}>
        <Nav.Link eventKey={name}>{name}</Nav.Link>
      </LinkContainer>
    </Nav.Item>
  );
};

const Menu = () => {
  return (
    <>
      <Navbar bg="light" varient="tabs" className="nav-margin">
        <Navbar.Brand href="#home">Operator UI</Navbar.Brand>
        <Nav className="mr-auto">
          <NavContainer path="/" name="Home" />
          <PrivateNavContainer path="/account" name="Account" />
        </Nav>

        <LogInOut />
      </Navbar>
    </>
  );
};

export default Menu;
