import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
    return (
        <div>
            <Card className='my-5'>
                <img src={producto.img} alt="" style={{width: '30%', marginLeft:'35%'}}/>
                <CardBody style={{width: '100%'}}>
                    <CardTitle tag="h3">
                        {producto.nombre}
                    </CardTitle>
                    <CardText>
                        {producto.desc}
                    </CardText>
                    <CardText tag="h5">
                        ${producto.precio}
                    </CardText>
                </CardBody>
                <CardFooter>
                    {
                        producto.stock > 0
                        ? <Link to={`/item/${producto.id}`} className='btn btn-secondary' style={{width: "100%" , marginTop: "2%", backgroundColor: "white", color: "gray", textDecoration: 'none' }}> View Details </Link>
                        : <p className='btn btn-secondary' style={{width: "100%" , marginTop: "2%", backgroundColor: "white", color: "gray", textDecoration: 'none' }}>Not available</p>
                    }
                </CardFooter>
            </Card>
        </div>
    )
}
export default Item