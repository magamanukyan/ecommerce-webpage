import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { MenuOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import scss from "./Navbar.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = useSelector(state=>state.cart.products)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <div className={scss.left}>
          <span className={scss.lg}>En</span>
          <div className={scss.search}>
            <input type="text" placeholder="Search" />
            <SearchIcon />
          </div>
        </div>
        <div className={scss.center}>
          <h1 className={scss.logo}>
            <Link to="/">
              {" "}
              M&<span>M</span>{" "}
            </Link>
          </h1>
        </div>
        <div className={scss.right}>
          <div className={scss.menuIcon} onClick={handleMenuClick}>
            <MenuOutlined />
          </div>
          <div
            className={`${scss.menuList} ${isMenuOpen ? scss.menuOpen : ""}`}
          >
            <ul>
              <li>
                {" "}
                <Link to="/register"> Register </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/login"> Sign In </Link>
              </li>
              <li>
                <Link to='/cart'>
                  {" "}
                  <Badge badgeContent={products.length} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
