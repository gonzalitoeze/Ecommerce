import Carousel from 'react-bootstrap/Carousel';



const Header = () => {
    return (
        <div style={{marginTop:"3%", marginBottom:"5%", minWidth:"600px"}}>
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/bannerimg.jpeg"
                    alt="First slide"
                  />
                  <Carousel.Caption className='text-dark'>
                    <h3>Royal Armour</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/bannerwomen.jpeg"
                    alt="Second slide"
                  />
                  <Carousel.Caption className='text-dark'>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/bannermen.jpeg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className='text-dark'>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Header