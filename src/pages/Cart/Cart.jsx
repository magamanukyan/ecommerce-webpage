import { Add, Delete, Remove } from "@mui/icons-material";
import scss from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart, updateItem } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.count;
    });
    return total.toFixed(2);
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const handleCountChange = (productId, count) => {
    dispatch(updateItem({ productId, count }));
  };

  return (
    <div className={scss.container}>
      <div className={scss.wrapper}>
        <h1 className={scss.title}>YOUR BAG</h1>
        <div className={scss.top}>
          <button className={scss.leftBtn}>Continue Shopping</button>
          <div className={scss.topTexts}>
            <a className={scss.topText} href="/">
              Shopping Bag({products.length})
            </a>
            <a className={scss.topText} href="/">
              Your Wishlist(0)
            </a>
          </div>
          <button className={scss.rightBtn}>Checkout Shopping</button>
        </div>
        <div className={scss.bottom}>
          <div className={scss.info}>
            {products.map((item) => (
              <div className={scss.product} key={item.id}>
                <div className={scss.productDetail}>
                  <img src={item.img} alt="product" />
                  <div className={scss.details}>
                    <span className={scss.productName}>
                      <b>Product:</b> {item.title}
                    </span>
                    <span className={scss.productId}>
                      <b>ID:</b> {item.id}
                    </span>
                    <div
                      style={{ backgroundColor: "black" }}
                      className={scss.color}
                    ></div>
                    <span className={scss.productSize}>
                      <b>Size:</b> M
                    </span>
                  </div>
                </div>
                <div className={scss.priceDetail}>
                  <div className={scss.productAmmountContainer}>
                    <Remove
                      onClick={() =>
                        handleCountChange(item.id, item.count - 1)
                      }
                    />
                    <span className={scss.amount}>{item.count}</span>
                    <Add
                      onClick={() =>
                        handleCountChange(item.id, item.count + 1)
                      }
                    />
                  </div>
                  <div className={scss.productPrice}>${item.price}</div>
                  <div className={scss.delete}>
                    <Delete onClick={() => handleRemoveItem(item.id)} />
                  </div>
                  <div className={scss.reset} onClick={handleResetCart}>
                    Reset Bag
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={scss.summary}>
            <h1 className={scss.summaryTitle}>ORDER SUMMARY</h1>
            <div className={scss.summaryItem}>
              <span>Subtotal</span>
              <span>${totalPrice()}</span>
            </div>
            <div className={scss.summaryItem}>
              <span>Estimated Shipping</span>
              <span>$5</span>
            </div>
            <div className={scss.summaryItem}>
              <span>Shipping Discount
              </span>
              <span>-$5</span>
            </div>
            <div className={[scss.summaryItem, scss.total].join(" ")}>
              <span>Total</span>
              <span>${totalPrice()}</span>
            </div>
            <button className={scss.totalBtn}>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
