import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

//Componentes
import Navbar from '../components/Navbar';
import { TailInput, TailLabel, ErrorNotification } from '../components/ui';

//Contexto
import { useAuth } from '../context/Auth.context';


//Imagen
import logo from "../assets/Logo_Unerg.svg"


const Login = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  //Mensaje de error
  const [errorLogin, setErrorLogin] = useState("");

  const [alertMessage, setAlertMessage] = useState(false)

  const { login, isAuthenticated, messageError } = useAuth()

  const goTo = useNavigate()

  useEffect(() => {
    isAuthenticated ? goTo("/dashboard") : goTo("/")
  }, [isAuthenticated, goTo])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await login(email, password)
      setErrorLogin(messageError)
      setAlertMessage(true)
    } catch (e) {
      console.log(e)
    }
  }



  return (


    <section>

      <Navbar />

      {errorLogin && alertMessage
        ? (
          <ErrorNotification setAlertMessage={setAlertMessage}>{errorLogin}</ErrorNotification>
        )
        : null}

      <div className="flex min-h-90 flex-1 flex-col px-6 py-6 lg:px-6 mt-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="UNERG"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicio de sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>

              <TailLabel htmlFor="email">
                Correo electronico
              </TailLabel>


              <div className='mt-2'>
                <TailInput
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

            </div>

            <div>
              <div>
                <TailLabel htmlFor="password">
                  Contraseña
                </TailLabel>

                <div className='mt-2'>
                  <TailInput
                    id='password'
                    name='password'
                    placeholder='Password'
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>


              </div>
            </div>

            <div>
              <button
                className="flex w-full items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export { Login };
