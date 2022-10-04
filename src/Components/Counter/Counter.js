import Button from 'react-bootstrap/Button';



const Counter = ({max, counter, setCounter, handleAddToCart}) => {

    const handleSubstract = () => {
        if (counter > 1)
        {setCounter(counter - 1)}
    }

    const handleAdd = () => {
        if (counter < max)
        {setCounter(counter + 1)}
    }

    

    return(
        <div>
            <Button variant={counter === 1 ? "outline-secondary" : "secondary"} onClick={handleSubstract} disabled={counter === 0}>-</Button>
            <span className="mx-1"> {counter} </span>
            <Button variant={counter === max ? "outline-secondary" : "secondary"} onClick={handleAdd} disabled={counter === max}>+</Button>
            <br></br>
            <Button variant="secondary" onClick={handleAddToCart} style={{width: "100%", marginTop: "2%"}} disabled={max === 0}>Buy!</Button>
        </div>
    )
}
export default Counter