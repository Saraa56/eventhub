import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

function Login() {

  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

  //Manejo de validaciones
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //se limpia el error
    setEmailError("");
    setPasswordError("");

        
    const emailRegex = /^\w+@\w+\.\w+$/;
   // Acepta mayúsculas, minúsculas, números y SÍMBOLOS/ESPACIOS (Mínimo 8 caracteres)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;


    let hasError: boolean = false;

    if(!email || !email.trim()){
       setEmailError("El correo es obligatorio");
       hasError = true;
    } else if(!emailRegex.test(email)){
       setEmailError("El correo no es válido");
       hasError = true;
    }
    if(!password || !password.trim()){
       setPasswordError("La contraseña es obligatoria");
       hasError = true;
    } else if(!passwordRegex.test(password)){
        setPasswordError("Contraseña invalida");
        hasError = true;
    }
    if(!hasError){
      alert("inicio de sesion correctamente")
    }
    
  }

  console.log('valor en tiempo real:'+ email);

  return (
    <form onSubmit={handleSubmit}>
    <Input 
        label={'Correo'} 
        id={'user_email'} 
        placeholder={'Ingrese su correo'} 
        type={'text'}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        error={emailError}
    />
    <Input 
        label={'Contraseña'} 
        id={'user_contraseña'} 
        placeholder={'Ingrese su contraseña'} 
        type={"password"}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        error={passwordError}
        
    />

    <Button id={'button_login'}>Iniciar Sesion</Button>
    </form>
  )
}

export default Login

