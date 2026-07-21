import { useState, type FormEvent } from 'react';
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const emailRegex = /^\w+@\w+\.\w+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    let hasError: boolean = false;

    if (!email || !email.trim()) {
      setEmailError("El correo es obligatorio");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("El correo no es válido");
      hasError = true;
    }
    if (!password || !password.trim()) {
      setPasswordError("La contraseña es obligatoria");
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Contraseña invalida");
      hasError = true;
    }
    if (!hasError) {
      alert("inicio de sesion correctamente")
    }
  }
console.log({ emailError, passwordError });
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="border-b border-gray-900/10 pb-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Inicio de sesion</h2>
          <p className="mt-1 text-sm text-gray-600">
            Incie sesion para el ingreso a eventhub o registrese:
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label={'Correo'}
            id={'user_email'}
            placeholder={'Ingrese su correo'}
            type={'email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <Input
            label={'Contraseña'}
            id={'user_contrasena'}
            placeholder={'Ingrese su contraseña'}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />

          <Button id={'button_login'} className="w-full mt-2" type='submit'>
            Iniciar Sesion
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login