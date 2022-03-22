import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CookieIcon from "@mui/icons-material/Cookie";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../db/Firebase";
import { useState, useEffect } from "react";

function Header({ product, setSearch }) {
  const [filterText, setfilterText] = useState("");
  console.log(product);
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (auth) {
      auth.signOut();
    }
  };
  useEffect(() => {
    setSearch(
      product.filter((item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase())
      )
    );
  }, [filterText]);

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h2 style={{ margin: "15px", alignItems: "center", color: "white" }}>
          SH
          <CookieIcon fontSize="medium" style={{ color: "white" }} />P
        </h2>
      </Link>
      <div className="header-search">
        <input
          className="header-searchInput"
          type="text"
          value={filterText}
          onChange={(e) => setfilterText(e.target.value)}
        />

        <ManageSearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link style={{ textDecoration: "none" }} to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-optionLineTwo">
              {auth ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/orders">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header-optionBasket">
            <AddShoppingCartIcon fontSize="medium" />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
