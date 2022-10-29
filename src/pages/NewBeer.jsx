import { useState } from "react";
import beersSrv from "../services/beers.service";
import {useNavigate } from "react-router-dom";

function NewBeer(){

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

    //añado useNavigate para que me redirija a la página con todas las beers después de crear la nueva
    const navigate = useNavigate();

    const submitFormHandler = (e) =>{
        e.preventDefault() //para evitar que la página carge

       const newbeer = {  // guardo body que recibo de la post request
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        }
    
        beersSrv.addBeer(newbeer) //llamo a la api con el método definido en services
        .then(response => {
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel(0);
            setContributedBy("");
        })

        navigate("/beers"); 
    }

    //handlers de los eventos onChange de los inputs de la form
    const nameHandler = (e)=>{ setName(e.target.value) }
    const taglineHandler = (e)=>{ setTagline(e.target.value) }
    const descriptionHandler = (e)=>{ setDescription(e.target.value) }
    const firstBrewedHandler = (e)=>{ setFirstBrewed(e.target.value) }
    const brewersTipsHandler = (e)=>{ setBrewersTips(e.target.value) }  
    const attenuationLevelHandler = (e)=>{ setAttenuationLevel(e.target.value) }
    const contributedByHandler = (e)=>{ setContributedBy(e.target.value) }


    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <form onSubmit={submitFormHandler}>
            <div className="col-12 fw-bold">
              <label>Name</label>
            </div>
            <input
              className="col-2"
              type="text"
              name="name"
              onChange={nameHandler}
              value={name}
            />
            <br />
            <div className="col-12 fw-bold">
              <label>Tagline</label>
            </div>
            <input
              className="col-2"
              type="text"
              name="tagline"
              onChange={taglineHandler}
              value={tagline}
            />{" "}
            <br />
            <div className="col-12 fw-bold">
              <label>Description</label>
            </div>
            <input
              className="col-2"
              type="text"
              name="description"
              onChange={descriptionHandler}
              value={description}
            />{" "}
            <br />
            <div className="col-12 fw-bold">
              <label>First Brewed</label>
            </div>
            <input
              className="col-2"
              type="text"
              name="first_brewed"
              onChange={firstBrewedHandler}
              value={first_brewed}
            />{" "}
            <br />
            <div className="col-12 fw-bold">
              <label>Brewers Tips</label>
            </div>
            <input
              className="col-2"
              type="text"
              name="brewers_tips"
              onChange={brewersTipsHandler}
              value={brewers_tips}
            />{" "}
            <br />
            <div className="col-12 fw-bold">
              <label>Attenuation Level</label>
            </div>
            <input
              className="col-2"
              type="number"
              name="attenuation_level"
              onChange={attenuationLevelHandler}
              value={attenuation_level}
            />{" "}
            <br />
            <div className="col-12 fw-bold">
              <label>Contributed by</label>
            </div>
            <input
              className="col-2"
              type="text"
              name="contributed_by"
              onChange={contributedByHandler}
              value={contributed_by}
            />{" "}
            <br />
            <button type="submit" className="m-3 btn btn-primary fw-bold">
              Add New Beer
            </button>
          </form>
        </div>
      </div>
    );
}

export default NewBeer;