import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <div className="logo">LUMIN</div>
          <nav className="menu">
            <ul>
              <li>Shop</li>
              <li>Learn</li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <div>Account</div>
          <div>
            <BsCart />
            <sup>0</sup>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
