import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'



const Checkout = () => {

    const { cart, cartPrice, finishPurchase } = useCartContext()

    const [values, setValues] = useState({
        name: '',
        surname: '',
        phone: '',
        address: '',
        email: '',
        identity:""

    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            Buyer: values,
            Items: cart,
            Total: cartPrice()
        }
        if (values.email.length < 2) {
            alert('Email is too short')
            return
        }
        if (values.name.length < 1) {
            alert('Name is too short')
            return
        }
        if (values.phone.length < 6) {
            alert('Phone is too short')
            return
        }
        if (values.address.length < 5) {
            alert('Address is too short')
            return
        }

        const ordenesRef = collection(db, 'ordenes')

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
            .then((doc) => {
                if (doc.data().stock > item.cantidad) {
                    updateDoc(docRef, {
                    stock: doc.data().stock - item.cantidad
                })
                    
                } else {
                    alert('Stock insuficiente')
                }
            })
        })
        
        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                finishPurchase(doc.id)
            })
        console.log(orden)
    }

    if (cart.length === 0) {
        return <Navigate to='/'/>
    }

    return(
        <div className="container my-5">
            <h2 className='text-center'>Checkout</h2>

            <form className='text-center' onSubmit={handleSubmit}>
                <input 
                name='name'
                onChange={handleInputChange}
                value={values.name} 
                type={'text'} 
                className='form-control my-3' 
                placeholder='Name'
                />
                <input 
                name='surname'
                onChange={handleInputChange}
                value={values.surname} 
                type={'text'} 
                className='form-control my-3' 
                placeholder='Surname'
                />
                <input 
                name='identity'
                onChange={handleInputChange}
                value={values.identity} 
                type={'string'} 
                className='form-control my-3' 
                placeholder='DNI/NIE/PASSPORT'
                />
                <input 
                name='phone'
                onChange={handleInputChange}
                value={values.phone} 
                type={'number'} 
                className='form-control my-3' 
                placeholder='Phone'
                />
                <input
                name='address'
                onChange={handleInputChange}
                value={values.address} 
                type={'text'} 
                className='form-control my-3' 
                placeholder='Address'
                />
                <input
                name='email'
                onChange={handleInputChange}
                value={values.email} 
                type={'email'} 
                className='form-control my-3' 
                placeholder='Email'
                />
                <button 
                type='submit' 
                className='btn btn-success'
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Checkout

