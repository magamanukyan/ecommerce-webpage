import scss from './Register.module.scss'

const Register = () => {
  return (
    <div className={scss.container}>
        <div className={scss.wrapper}>
            <h1>CREATE AN ACCOUNT</h1>
            <form action="">
                <input type="text" placeholder='name' />
                <input type="text" placeholder='last name' />
                <input type="text" placeholder='username' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="password" placeholder='confirm password' />
                <span>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></span>
                <button>CREATE</button>
            </form>
            
        </div>
    </div>
  )
}

export default Register