import beersSrv from "../services/beers.service";
import { useEffect, useState } from "react";

function RandomBeer(){

    const [beer, setBeer] = useState({});

    useEffect(()=>{
        beersSrv.getRandom()
        .then(result =>{
            setBeer(result.data);
        })
    }, [])


    return (
      <div className="row mb-5 mt-5">
        <div className="col-8 m-auto">
          <div className="row m-auto">
            <img
              className="img-fluid m-auto w-25"
              src={beer.image_url}
              alt={beer.name}
            />
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-sm-10 text-start">
                <h1>{beer.name}</h1>
                <h3 style={{ color: "gray" }}>
                  <strong>{beer.tagline}</strong>
                </h3>
              </div>
              <div className="col-sm-2 fw-bold">
                <p className="fs-2 text-end fw-bold" style={{ color: "gray" }}>
                  {beer.attenuation_level}
                </p>
                <p className="text-end">
                  <strong>{beer.first_brewed}</strong>
                </p>
              </div>
            </div>
            <div className="row text-start">
              <p className="card-text fw-bold">{beer.description}</p>
              <p className="card-text">
                <strong>Created by: </strong>
                {beer.contributed_by}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RandomBeer;