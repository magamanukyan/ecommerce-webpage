import { Link } from 'react-router-dom'
import scss from './CategoryItem.module.scss'

const CategoryItem = ({item}) => {
  return (
    <div className={scss.container}>
        <img src={item.img} alt="" />
        <div className={scss.info}>
            <h1>{item.title}</h1>
          <Link to='/productList/:id'><button>SHOP NOW</button> </Link>  
        </div>
    </div>
  )
}

export default CategoryItem