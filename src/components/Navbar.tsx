import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/Auth.context"

interface Children extends React.LinkHTMLAttributes<HTMLLinkElement> {}

const Navbar = ({children}: Children) => {
    const { isAuthenticated, logout } = useAuth()
    const goTo = useNavigate()

    return (

        <header className="mx-auto max-w-full px-2 sm:px-2 lg:px-2 bg-slate-900">

            {isAuthenticated
                ? <div className="relative flex h-16 text-white w-full">
                    <nav className="flex justify-end w-full items-center px-6 ">
                        <button className="mr-auto text-justify sm:text-sm sm:leading-6 hover:text-gray-300" onClick={()=>goTo("/dashboard")}>Inicio</button>
                        {children}
                        <button className="text-justify sm:text-sm sm:leading-6 hover:text-gray-300" onClick={logout}>Salir</button>
                    </nav>
                </div>
                : <div className="relative flex h-16 text-white w-full">
                    <nav className="flex justify-end w-full items-center px-6 ">
                        <a className="mr-4 text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="https://unerg.edu.ve/" target="_blank">UNERG</a>
                        <a className="text-justify sm:text-sm sm:leading-6 hover:text-gray-300" href="http://www.opsu.gob.ve/" target="_blank">Opsu</a>
                    </nav>
                </div>}


              

        </header>
        
    )
}

export default Navbar