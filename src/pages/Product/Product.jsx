import { Add, Remove } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { popularProducts } from "../../data";
import scss from "./Product.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const productId = parseInt(id);

  const dispatch = useDispatch();

  const product = popularProducts.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        {" "}
        <div className={scss.imgContainer}>
          <img src={product.img} alt="product" />
        </div>{" "}
        <div className={scss.infoContainer}>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>
          <span className={scss.price}>${product.price}</span>
          <div className={scss.filterContainer}>
            <div className={scss.filter}>
              {" "}
              <span className={scss.infoTitle}>Color</span>
              <div style={{ backgroundColor: "black" }}></div>
              <div style={{ backgroundColor: "bisque" }}></div>
              <div style={{ backgroundColor: "pink" }}></div>
            </div>
            <div className={scss.filter}>
              {" "}
              <span className={scss.infoTitle}>Size</span>
              <select name="size" id="size">
                <option value="size">XS</option>
                <option value="size">S</option>
                <option value="size">M</option>
                <option value="size">L</option>
                <option value="size">XL</option>
              </select>
            </div>
          </div>
          <div className={scss.addContainer}>
            <div className={scss.amountContainer}>
              <Remove
                onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
              />
              <span className={scss.amount}>{count}</span>
              <Add onClick={() => setCount((prev) => prev + 1)} />
            </div>
            <Link to="/cart">
              {" "}
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      desc: product.desc,
                      price: product.price, 
                      img: product.img,
                      count,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
