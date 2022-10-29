import { Link } from "react-router-dom";


function AllBeers({beer}){

    return (
      <div className="row">
        <div className="col-4 m-auto p-3">
          <Link to={"/beers/" + beer._id}>
            <img
              src={beer.image_url}
              alt={beer.name}
              className="img-fluid w-25"
            />
          </Link>
        </div>

        <div
          className="card-body col-4 m-auto p-3"
          style={{ textAlign: "left" }}
        >
          <h1>{beer.name}</h1>
          <h3 style={{ color: "gray" }}>
            <strong>{beer.tagline}</strong>
          </h3>
          <p>
            <strong>Created by: </strong>
            {beer.contributed_by}
          </p>
        </div>
        <hr></hr>
      </div>
    );
}

export default AllBeers;

