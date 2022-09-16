import {useState, useEffect} from 'react';
import registerImg from "../../assets/register.svg";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {GoPrimitiveDot} from "react-icons/go";
import {FaCheck} from "react-icons/fa";


//on passe le onLogin, onShowPassword et onTogglePassword au click ds les props pour gérer le state dans son élément parent et ainsi que d'autres composants comme login puisse y accéder
const Register = ({onLogin, onShowPassword, onTogglePassword}) => {

  
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState("");
  const [passNumber, setPassNumber] = useState("");
  const [passChar, setPassChar] = useState("");
  const [passLength, setPassLength] = useState("");

  const [passComplete, setPassComplete] = useState("");

  

  const handleShowIndicator = () => {
    setShowIndicator(true);
  }

  const handlePasswordChange =  (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  useEffect(() => {
    //check Lower and Uppercase match

  if(pass.match
    (/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
      setPassLetter(true)
    }else{
      setPassLetter(false)
    }  
    //check for numbers match 
  if(pass.match(/([0-9])/)) {
      setPassNumber(true)
    }else{
      setPassNumber(false)
    }

    // check for special character match
  if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
    setPassChar(true)
  }else {
    setPassChar(false)
  }

    if(pass.length > 7 ) {
      setPassLength(true)
    }else {
      setPassLength(false)
    }

    if(passLetter && passNumber && passChar && passLength) {
      setPassComplete(true)
    }else {
      setPassComplete(false)
    }
    //on mets ts les states en dependance pour les checker et avoir une mise a jour des saisies et ainsi appliquer les bonnes class
  }, [pass, passLetter, passChar, passNumber, passLength]);
  

  return (
    <div className='main-container --flex-center'>
        
        <div className="form-container">
            <form className="--form-control">
                <h2 className='--color-danger --text-center'>Register</h2>
                <input type="text" className='--width-100' placeholder="Username"/>
                <input type="email" className='--width-100' placeholder="Email"/>
                {/* PASSWORD FIELD */}
                <div className="password">
                {/* si onShowpassword est true alors on affiche le text sinon on le cache */}
                <input type={onShowPassword ? "text" : "password"} 
                className='--width-100' placeholder="Password" 
                onFocus={handleShowIndicator}
                // on stock la valeur de la saisie dans le state et au changement on la recup ds le nouveau state
                value={pass}
                onChange={handlePasswordChange}/>
                <span className="icon" 
                onClick={onTogglePassword}>
                  {/* si le state onShowpassword est true on affiche l'oeil fermé sinon l'oeil ouvert */}
                  {onShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
                </div>
                  {/* PASSWORD FIELD */}
                <button disabled={!passComplete} 
                //si le state passComplete est false dc form non rempli le bouton est desactivé0
                className={passComplete ? '--btn      --btn-primary --btn-block' : '--btn      --btn-primary --btn-block --btn-disabled'}
                >Register</button>               
                  <span className='--text-sm --block'>Have an account? <a href='#' className='--text-sm' 
                  onClick={onLogin}>Login</a>
                  </span>
                {/* PASS STRENGTH INDICATOR*/}
                {/* si le state est true(focus ds input password) alors on utilise la class css qui montre sinon celle qui cache */}
                <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
                  <ul className="--list-style-none --card --bg-grey --text-sm --p">
                    <p className='--text-sm'>Password Strength Indicator</p>
                    <li className={passLetter ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                        {passLetter ? 
                        <FaCheck /> : 
                        <GoPrimitiveDot />}                      
                      &nbsp;Lowercase & Uppercase
                      </span>
                    </li>
                    <li className={passNumber ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>{passNumber ? 
                        <FaCheck /> : 
                        <GoPrimitiveDot />}
                      &nbsp;Numbers(0-9)
                      </span>
                    </li>
                    <li className={passChar ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                      {passNumber ? 
                        <FaCheck /> : 
                        <GoPrimitiveDot />}
                      &nbsp;Special Character (!@#$%^&*)
                      </span>
                    </li>
                    <li className={passLength ? "pass-green" : "pass-red"}>
                      <span className='--align-center'>
                      {passLength ? 
                        <FaCheck /> : 
                        <GoPrimitiveDot />}
                      &nbsp;At least 8 Character
                      </span>
                    </li>                    
                  </ul>
                </div>
            </form>            
        </div> 
        <div className="img-container">
            <img src={registerImg} alt='register'/>
        </div>     
    </div>
  )
}

export default Register
