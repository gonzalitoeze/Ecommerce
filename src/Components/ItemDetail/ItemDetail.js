import { Card, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap'
/* import ItemCount from '../ItemCount/ItemCount' */
import Counter from '../Counter/Counter'



const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <Card
                className="my-2"
                style={{
                    width: '30%'
                }}>
                <img src={item.img} alt="" />
                <CardBody>
                    <CardTitle tag="h5">
                        {item.nombre}
                    </CardTitle>
                    <CardText>
                        {item.desc}
                    </CardText>
                    <CardText>
                        ${item.precio}
                    </CardText>
                    <Counter max={item.stock}/>
                    {/* <ItemCount/> */}
                </CardBody>
                <CardFooter>
                    Stock: {item.stock}
                </CardFooter>
            </Card>

            
                    
        </div>
            
    )
}
export default ItemDetail

/* <img src={item.img} alt="" />
            <h3>{item.nombre}</h3>
            <h3>{item.desc}</h3>
            <h3>{item.category}</h3>
            <h4>{item.precio}</h4> */