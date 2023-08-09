import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
