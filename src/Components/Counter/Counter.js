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
            <Button variant="outline-secondary" onClick={handleSubstract}>-</Button>
            <span className="mx-1"> {counter} </span>
            <Button variant="secondary" onClick={handleAdd}>+</Button>
            <br></br>
            <Button variant="secondary" onClick={handleAddToCart} style={{width: "100%", marginTop: "2%"}}>Buy!</Button>

        </div>
    )
}
export default Counter