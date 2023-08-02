import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

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

    const getGuitar = async() =>{
        const response = await fetch(`http://localhost:8000/guitars/${guitar_id}/`);
        const guitarData = await response.json();
        console.log(guitarData)

        setGuitar(guitarData.guitar)
    }

    const owners = ["Chris Z", "Kyle", "Reagan", "Steve Irwin"]
    let ownerIndex = 0

    const PassGuitar = async() =>{
      ownerIndex++;
      let newGuitar = {...guitar, ["owner"]: owners[ownerIndex]}
      setGuitar(newGuitar)
    };


    useEffect(() => {
        getGuitar();
        console.log(guitar)
        console.log(guitar_id)
    }, []);

    const handleDelete = async(event) => {
        event.preventDefault();
        const guitarUrl = `http://localhost:8000/guitars/${guitar_id}/`;
        const fetchConfig = {
          method: "DELETE",
        }
        const response = await fetch(guitarUrl, fetchConfig);
        console.log(response);
        console.log(response.json());
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
            <button onClick={handleDelete}>Click Here to Delete</button>
        </div>
    )
}

export default GuitarDetail