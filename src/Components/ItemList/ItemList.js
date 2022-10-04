import Item from '../Item/Item';


const ItemList = ({productos = []}) => {
    return (
        
        <div className="container">
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}
export default ItemList