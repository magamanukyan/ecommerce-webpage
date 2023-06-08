import { Send } from '@mui/icons-material'
import scss from './Newsletter.module.scss'

const Newsletter = () => {
  return (
    <div className={scss.container}>
        <h1>Newsletter</h1>
        <p>Get tymely updates from your favourite products</p>
        <div className={scss.inputContainer}>
            <input type="email" placeholder="Enter your email" />
            <button><Send/></button>
            
        </div>
    </div>
  )
}

export default Newsletter