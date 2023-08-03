import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom'

function GuitarList() {

    const [guitars, setGuitars] = useState([]);

    const getGuitars = async() =>{
        const response = await fetch("http://localhost:8000/guitars/");
        const guitarData = await response.json();
        console.log(response.json())

        setGuitars(guitarData.guitars)
    }

    useEffect(() => {
        getGuitars();
        console.log(guitars)
    }, []);


    return (
        <div>
            <p>Hello</p>
            {guitars.length > 0 ?
            <p>The number of guitars we have is: {guitars.length}</p> :
            null
            }
            {guitars.map((guitar, index) => {
                return (<div key={index}>
                    <NavLink to={`/guitars/${guitar.id}`}>
                        <p><b>{guitar.model_name}</b></p>
                    </NavLink>
                    <p>{guitar.region}</p>
                    <p>{guitar.manufacturer}</p>
                    <p>{guitar.id}</p>
                </div>)
            })}
        </div>
    )
}

export default GuitarList