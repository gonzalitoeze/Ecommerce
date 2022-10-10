import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

export const useProducts = () => {
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
        {productos, loading}
    )
}