import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from './icono.webp';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss'



export const NavBar = () => {

  /* const {user, logout} = useLoginContext() */

    return (
        <Navbar className='BarraNav' bg="light" variant="light">
        <Container>
          <Link to="/" className='navbar'><img src={icono} className='icono' alt='' style={{width: '40%', marginLeft: '20%'}}/></Link>
          <Nav>
            <Dropdown as={ButtonGroup}>
              <Nav.Link className='navbar'>Products</Nav.Link>
              <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item><Link to="/products/men" className='navbar'>Men's</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/Products/women" className='navbar'>Women's</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/Products/acc" className='navbar'>Accesories</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link><Link to="/aboutus" className='navbar'>About us</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className='navbar'>Contact</Link></Nav.Link>
            <Nav.Link><Link to="/login" className='navbar'>Login</Link></Nav.Link>
            <Nav.Link><Link to="/cart" className='navbar'><CartWidget/></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}