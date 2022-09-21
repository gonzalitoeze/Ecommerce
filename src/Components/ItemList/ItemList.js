import Item from '../Item/Item'


const ItemList = ({productos = []}) => {
    return (
        <div className="container my-5">
            <h2>GI - NOGI - ACCESORIES</h2>
            <br/>

            { productos.map((prod) => <Item producto={prod} key={prod.id}/>
            )}
        </div>
    )
}
export default ItemList