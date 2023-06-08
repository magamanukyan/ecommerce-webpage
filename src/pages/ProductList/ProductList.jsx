import Products from "../../components/Products/Products";
import scss from "./ProductList.module.scss";

const ProductList = () => {
  return (
    <div className={scss.container}>
      <h1>Dresses</h1>
      <div className={scss.filterContainer}>
        <div className={scss.filter}>
          <span className={scss.filterText}>Filter Products:</span>
          <select name="color" id="color">
            <option disabled selected value="color">Color</option>
            <option value="color">White</option>
            <option value="color">Black</option>
            <option value="color">Red</option>
            <option value="color">Blue</option>
            <option value="color">Yellow</option>
            <option value="color">Green</option>
          </select>
          <select name="size" id="size">
            <option disabled selected value="size">Size</option>
            <option value="size">XS</option>
            <option value="size">S</option>
            <option value="size">M</option>
            <option value="size">L</option>
            <option value="size">XL</option>
          </select>
        </div>
        <div className={scss.filter}>
          <span className={scss.filterText}>Filter Products:</span>
          <select name="sort" id="sort">
            <option disabled selected value="sort">Sort</option>
            <option value="sort">Price(asc)</option>
            <option value="sort">Price(desk)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductList;
