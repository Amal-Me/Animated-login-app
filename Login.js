import loginImg from "../../assets/login.svg";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";


//on passe les states et fonctions communes au click ds les props pour gérer le state dans son élément parent et partager certaines props entre elements enfants(register..)
const Login = ({onRegister, onReset, onTogglePassword,onShowPassword }) => {
  return (
    <div className='main-container --flex-center'>
        <div className="img-container">
            <img src={loginImg} alt='login'/>
        </div>
        <div className="form-container">
            <form className="--form-control">
                <h2 className='--color-danger --text-center'>Login</h2>
                
                <input type="text" className='--width-100' placeholder='Username'/> 

                <div className="password">
                  <input type={onShowPassword ? "text" : "password"}  className='--width-100' placeholder='Password'/>
                  <span className="icon" 
                onClick={onTogglePassword}>
                  {/* si le state onShowpassword est true on affiche l'oeil fermé sinon l'oeil ouvert */}
                  {onShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
                </div>        
                <button className='--btn --btn-primary --btn-block'>Login</button>
                <a href='#' className='--text-sm' onClick={onReset}>Forgot password?</a>
                <span className='--text-sm --block'>Don't have an account?<a href='#' className='--text-sm' onClick={onRegister}>Register</a></span>
            </form>
        </div>
      
    </div>
  )
}

export default Login
