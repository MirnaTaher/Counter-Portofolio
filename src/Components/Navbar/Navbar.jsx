import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-2 fs-4 bg-light">
    <div className="container row justify-content-between mx-auto">
      <Link to="/" className="col-4 text-primary text-decoration-none text-start">React Portofolio</Link>
      <ul className="col-8 text-end">
       <Link to="/"><li className="list-unstyled d-inline-block mx-3">Home</li></Link> 
       <Link to="/counter"><li className="list-unstyled d-inline-block mx-3">Counter</li></Link>
       <Link to="/shop"><li className="list-unstyled d-inline-block mx-3">Shop</li></Link>
       <Link to="/todo"><li className="list-unstyled d-inline-block mx-3">To-do</li></Link>
       <Link to="/login"><li className="list-unstyled d-inline-block mx-3">Login</li></Link>
       <Link to="/register"><li className="list-unstyled d-inline-block mx-3">Register</li></Link>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
