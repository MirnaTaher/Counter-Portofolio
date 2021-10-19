import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="row justify-content-between py-2 fs-4 bg-light">
      <Link to="/" className="col-4 text-primary text-decoration-none">React Portofolio</Link>
      <ul className="col-4">
       <Link to="/"><li className="list-unstyled d-inline-block mx-3">Home</li></Link> 
       <Link to="/counter"><li className="list-unstyled d-inline-block mx-3">Counter</li></Link>
       <Link to="/shop"><li className="list-unstyled d-inline-block mx-3">Shop</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
