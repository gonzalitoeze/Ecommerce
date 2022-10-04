import { useEffect, useState } from "react";
import { pedirDatos } from "../../Helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import '../Loader/Loader.scss';
import Loader from "../Loader/Loader";



const ItemDetailContainer = ( {idProductos} ) => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {

        pedirDatos()
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        
        <div className="itemlistcontainer" style={{minWidth:"600px"}}>
            <div className="container">
                <div className="row text-center">
                    {
                    loading
                    ? <Loader/>
                    : <ItemDetail item={item}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default ItemDetailContainer