import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import '../Loader/Loader.scss';
import Loader from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config"



const ItemDetailContainer = ( {idProductos} ) => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        //1.- Armar la referencia (sync)
        const itemRef = doc(db, 'productos', itemId)
        //2.- Llamar a la db (async)
        getDoc(itemRef)
            .then((doc) => {
                setItem ({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

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