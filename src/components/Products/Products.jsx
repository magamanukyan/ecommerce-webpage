import { Link } from 'react-router-dom'
import scss from './Products.module.scss'
import { popularProducts } from '../../data'
import Product from '../Product/Product'

const Products = () => {
  return (
    <div className={scss.container}>
        {popularProducts.map(item =>(    
           <Link to={`/product/${item.id}`}  > <Product item = {item}key={item.id}/> </Link>
       ) )}
    </div>
  )
}

export default Products

