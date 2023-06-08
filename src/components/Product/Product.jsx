import { useNavigate } from "react-router-dom";

import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import scss from "./Product.module.scss";

const Product = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className={scss.container} onClick={handleClick}>
      <div className={scss.circle}></div>
      <img src={item.img} alt="" />
      <div className={scss.info}>
        <div className={scss.icon}>
          <ShoppingCartOutlined />
        </div>
        <div className={scss.icon}>
          <SearchOutlined />
        </div>
        <div className={scss.icon}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
