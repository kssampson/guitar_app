import React, {useState, useEffect} from 'react'

function CreateGuitar() {

    const [guitar, setGuitar] = useState({
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
    });

    const handleChange = (event) => {
      setGuitar({...guitar, [event.target.name]: event.target.value})
    }

    const handleSubmit = async(event) => {
      event.preventDefault();
      const data = {...guitar}
      data["scale_length"] = parseInt(data["scale_length"], 10);
      data["nut_width"] = parseInt(data["nut_width"], 10);
      data["overall_height"] = parseInt(data["overall_height"], 10);
      console.log(data)

      const guitarUrl = "http://localhost:8000/guitars/";
      const fetchConfig = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        }
      }
      const response = await fetch(guitarUrl, fetchConfig);

      if (response.ok) {
        const responseData = await response.json();
        const guitar_id = responseData.id;
        window.location.href = `http://localhost:5173/guitars/${guitar_id}`;
        alert('Guitar creation successful!')
      } else {
        alert('There was an error in creating your guitar!');
      }
    }


    return (
        <div className="appPage">
            <label>Tuner Type</label>
            <input
              type="text"
              placeholder="Tuner Type"
              name="tuner_type"
              value={guitar.tuner_type}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Bindings</label>
            <input
              type="text"
              placeholder="Bindings"
              name="bindings"
              value={guitar.bindings}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Manufacturer</label>
            <input
              type="text"
              placeholder="manufacturer"
              name="manufacturer"
              value={guitar.manufacturer}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Image</label>
            <input
              type="text"
              placeholder="image"
              name="image"
              value={guitar.image}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Model Name</label>
            <input
              type="text"
              placeholder="Model Name"
              name="model_name"
              value={guitar.model_name}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Scale Length</label>
            <input
              type="number"
              placeholder="Scale Length"
              name="scale_length"
              value={guitar.scale_length}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Nut Width</label>
            <input
              type="number"
              placeholder="Nut Width"
              name="nut_width"
              value={guitar.nut_width}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Overall Height</label>
            <input
              type="number"
              placeholder="Overall Height"
              name="overall_height"
              value={guitar.overall_height}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Region</label>
            <input
              type="text"
              placeholder="Region"
              name="region"
              value={guitar.region}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Back and Side Wood</label>
            <input
              type="text"
              placeholder="Back and Side Wood"
              name="back_and_side_wood"
              value={guitar.back_and_side_wood}
              onChange={handleChange}
            >
            </input>
            <br/>
            <label>Top Wood</label>
            <input
              type="text"
              placeholder="Top Wood"
              name="top_wood"
              value={guitar.top_wood}
              onChange={handleChange}
            >
            </input>
            <br/>
            <button onClick={handleSubmit}>Click Here To Submit
            </button>
        </div>
    )
}

export default CreateGuitar