import React, {useState, useEffect} from 'react'
import {useParams, NavLink} from "react-router-dom"


function GuitarDetail() {

    const [guitar, setGuitar] = useState({
      "id": "",
      "tuner_type": "",
      "bindings": "",
      "manufacturer": "",
      "image": "",
      "model_name": "",
      "scale_length": 0,
      "nut_width": 0,
      "overall_height": 0,
      "region": "",
      "back_and_side_wood": "",
      "top_wood": "",
      "owner": "",
    });

    const {guitar_id} = useParams();

    const owners = ["Chris Z", "Kyle", "Reagan", "Steve Irwin"]
    let ownerIndex = 0

    const getGuitar = async() =>{
        const response = await fetch(`http://localhost:8000/guitars/${guitar_id}/`);
        const guitarData = await response.json();
        console.log(guitarData)
        guitarData["owner"] = owners[ownerIndex];

        setGuitar(guitarData.guitar)
    }

    const PassGuitar = async() =>{
      ownerIndex++;
      let newGuitar = {...guitar, ["owner"]: owners[ownerIndex]}
      setGuitar(newGuitar)
    };


    useEffect(() => {
        getGuitar();
        console.log(guitar)
        console.log(guitar_id)
    }, [guitar.owner]);

    const handleDelete = async(event) => {
        event.preventDefault();
        const guitarUrl = `http://localhost:8000/guitars/${guitar_id}/`;
        const fetchConfig = {
          method: "DELETE",
        }
        const response = await fetch(guitarUrl, fetchConfig);
        console.log(response);
        console.log(response.json());

        if (response.ok) {
            window.location.href = `http://localhost:8000/guitars/`
        }
      }


    return (
        <div>
            <p>Hello</p>
            {guitar ?
            <p>The guitar is owned by: {guitar.owner}</p> :
            null
            }
            <button onClick={PassGuitar}>Change Owner</button>
            <p>{guitar.model_name}</p>
            <p>{guitar.scale_length}</p>
            <p>{guitar.region}</p>
            <p>{guitar.manufacturer}</p>
            <NavLink to={"/guitars/"}>
                <p>Click Here to Go Back</p>
            </NavLink>
            <button onClick={handleDelete}>Click Here to Delete</button>
        </div>
    )
}

export default GuitarDetail