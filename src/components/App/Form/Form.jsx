import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"


function Form() {
    const dispatch = useDispatch();
    const [inputAirlines, setInputAirlines] = useState('');
    const [inputPlanes, setInputPlanes] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({
            type: 'ADD_AIRLINE',
            payload: {
                name: inputAirlines,
                planes: inputPlanes
            }
        })
        setInputAirlines('');
        setInputPlanes('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder='Airline Name' 
                type="text"
                value={inputAirlines}
                onChange={(event) => {setInputAirlines(event.target.value)}}
                />
                <input 
                placeholder="Number of Planes"
                type="text"
                value={inputPlanes}
                onChange={(event) => {setInputPlanes(event.target.value)}}
                />
                <button type="submit">Add Airline</button>
            </form>
        </>
    )
}

export default Form;