import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from './icono.webp';



export const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/"><img src={icono} className='icono' alt='' style={{width: '40%', marginLeft: '-20%'}}/></Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}