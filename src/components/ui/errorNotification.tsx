import errorImg from "../../assets/error.png"
import errorStyle from "../../styles/errors/errorDownload.module.css"

const ErrorNotification = ({children, setAlertMessage}: { children: React.ReactNode, setAlertMessage: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return(
        <div className={errorStyle.container}>
        <img src={errorImg} alt="Error" />
        <p>{children}</p>
        <button onClick={()=> setAlertMessage(false)}>X</button>
    </div>)
}

export {ErrorNotification}