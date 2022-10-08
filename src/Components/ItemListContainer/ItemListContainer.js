import './ItemListContainer.scss';
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams ()

    useEffect(()  => {
        setLoading(true)
        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDb = resp.docs.map( (doc) => ({ id: doc.id, ...doc.data() }) )
                console.log(productosDb)
                setProductos(productosDb)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className="itemlistcontainer" style={{minWidth:"600px"}}>
            <div className="container">
                <div className="row text-center">
                    {   
                        loading
                        ? <Loader/>
                        : <ItemList productos={productos}/>
                    }
                </div>
            </div>
        </div>    
    )
}
export default ItemListContainer