import scss from './Categories.module.scss'
import { categories } from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categories = () => {
  return (
    <div className={scss.container}>
        {
            categories.map(item=>(
                <CategoryItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default Categories