import {useState} from 'react';
import Login from './Login';
import "./AuthContainer.scss";
import Reset from './Reset';
import Register from './Register';

//ici ds l'élément parent on gère le state de chaque élément enfant pour l'afficher ou pas en fonction des clic de l'utilsateur
//on initialisera dc la page d'accueil a login TRUE de base
const AuthContainer = () => {
    const [auth, setAuth] = useState({
        login:true,
        register:false,
        reset:false,
    });


//PARTAGE DE STATE POUR LES ELEMENTS ENFANTS LOGIN ET REGISTER DANS L ELEMENT PARENT (ici)
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      //au click on interchange l'affichage des 2 icons et donc le state 
      setShowPassword(!showPassword)
    };

    const handleLogin = () => { 
        setAuth({login:true,register:false,reset:false,}) 
    }
    const handleRegister = () => {
        setAuth({login:false,register:true,reset:false,})
    }
    const handleReset = () => {
        setAuth({login:false,register:false,reset:true,})
    }
    
  return (
    <section className='--flex-center --100vh '>
      <div className="container box">
        {auth.login && <Login onRegister={handleRegister} onReset={handleReset} onShowPassword={showPassword} onTogglePassword={handleTogglePassword}/>}
        {auth.register && <Register onLogin={handleLogin} onShowPassword={showPassword} onTogglePassword={handleTogglePassword}/>}
        {/* on fait passer le state et la fonction crée a la base ds le composant register dans les props du parent(authcontainer) pour que le composant (login) puisse y accéder et donc ne pas dupliquer les mêmes fonctions */}
        {auth.reset && <Reset  onLogin={handleLogin}/>}  
      </div>        
    </section>
  )
}

export default AuthContainer;
