



import React, { useState } from 'react'
import { Button } from 'reactstrap'

const ItemCount = ({stock, addToCart}) => {
    const [count, setCount] = useState (0);

    const handleAdd = () => {
        if (count < stock){
            setCount(count+1)
        }
    }

    const handleSubstract = () => {
        if (count > 0){
            setCount(count-1)
        }
    }

    return (
        <div>
            <p>Amount:</p>
            <Button onClick={handleSubstract}> - </Button>
            <span style={{marginLeft: "5%", marginRight: "5%"}}>{count}</span>
            <Button onClick={handleAdd}> + </Button>
            <Button style={{width: "100%" , marginTop: "3%"}} disable={stock < 0} onClick={() => addToCart(count)}> Add to cart </Button>
        </div>
    )
}

export default ItemCount