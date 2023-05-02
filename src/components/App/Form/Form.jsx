import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"


function Form() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_AIRLINE',
            payload: input
        })
        setInput('');
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder='Airline Name' 
                type="text"
                value={input}
                onChange={(event) => {setInput(event.target.value)}}
                />
                <button type="submit">Add Airline</button>
            </form>
        </>
    )
}

export default Form;