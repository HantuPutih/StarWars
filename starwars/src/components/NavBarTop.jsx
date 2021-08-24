import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function NavBarTop() {
  let history = useHistory();
  const onFilms = () => {
    history.push(`/`);
  };
  const onChar = () => {
    history.push("/character");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Swapiku</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={onFilms}>Films</Nav.Link>
            <Nav.Link onClick={onChar}>People</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarTop;
