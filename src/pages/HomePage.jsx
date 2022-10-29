import { Link } from 'react-router-dom';
import beersPic from "../assets/beers.png"
import newBeerPic from "../assets/new-beer.png"
import randomBeerPic from "../assets/random-beer.png"

function HomePage(){

    return (
      <div className="container-fluid">
        <div className="row">
          <Link to="/beers">
            <img src={beersPic} alt="All beers" className="w-100" />
            <h1>All Beers</h1>
          </Link>
          <div className="col-10 mx-auto">
            <p className="text-start p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae iaculis ante. Vivamus tristique, sem id
              pellentesque malesuada, quam magna tempor ligula, sit amet
              placerat metus enim eu neque. Donec enim lacus, consequat ut
              vulputate tincidunt, tempus et sapien. Phasellus lobortis ornare
              massa, id pretium neque mollis non.
            </p>
          </div>
        </div>

        <div className="row">
          <Link to="/random-beer">
            <img src={randomBeerPic} alt="Random beer" className="w-100" />
            <h1>Random Beer</h1>
          </Link>
          <div className="col-10 mx-auto">
            <p className="text-start p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae iaculis ante. Vivamus tristique, sem id
              pellentesque malesuada, quam magna tempor ligula, sit amet
              placerat metus enim eu neque. Donec enim lacus, consequat ut
              vulputate tincidunt, tempus et sapien. Phasellus lobortis ornare
              massa, id pretium neque mollis non.
            </p>
          </div>
        </div>

        <div className="row">
          <Link to="/new-beer">
            <img src={newBeerPic} alt="New beer" className="w-100" />
            <h1>New Beer</h1>
          </Link>
          <div className="col-10 mx-auto">
            <p className="text-start p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vitae iaculis ante. Vivamus tristique, sem id
              pellentesque malesuada, quam magna tempor ligula, sit amet
              placerat metus enim eu neque. Donec enim lacus, consequat ut
              vulputate tincidunt, tempus et sapien. Phasellus lobortis ornare
              massa, id pretium neque mollis non.
            </p>
          </div>
        </div>
      </div>
    );
}

export default HomePage;