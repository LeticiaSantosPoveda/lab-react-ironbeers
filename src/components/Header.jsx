import {Link} from 'react-router-dom';
import headerPic from "../assets/home-blue.png"

function Header() {
    return (
      <nav className="navbar sticky-top" style={{ backgroundColor: "#5fccfc" }}>
        <div className="container-fluid mx-auto d-block">
          <Link to="/">
            <img src={headerPic} alt="home" />
          </Link>
        </div>
      </nav>
    );
}

export default Header;