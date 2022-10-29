import axios from "axios";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";
const api2Url = "https://ih-beers-api2.herokuapp.com/beers/random";

class BeersService {
    
    getBeers(){
        return axios.get(apiUrl);
    }
    getBeer(beerId){
        return axios.get(apiUrl + "/" + beerId);
    }
    getRandom(){
        return axios.get(api2Url);
    }
    addBeer(newBeer){
        return axios.post(apiUrl + "/new", newBeer);
    }
    // searchBeer()
}

const beersSrv = new BeersService();
export default beersSrv;


