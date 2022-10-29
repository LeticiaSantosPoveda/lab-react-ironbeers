import { useEffect, useState } from "react";
import beersSrv from "../services/beers.service";
import AllBeers from "../components/AllBeers";

function ListBeers(){

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        beersSrv.getBeers()
        .then(result =>{
            setBeers(result.data);
        })
    }, [])

    if (beers.length === 0){
        return <div>
            <p>Loading...</p>
        </div>
    }

    return(
        <div className="container">
            {beers.map(beer => <AllBeers beer={beer} key={beer._id}/>)}
        </div>
    );
    

}

export default ListBeers;