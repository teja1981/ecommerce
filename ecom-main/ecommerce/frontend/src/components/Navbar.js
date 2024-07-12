import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MyEcomm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">cart</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>   
            <Nav.Link href="/all-products">view products</Nav.Link>      
   
          </Nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default ColorSchemesExample;