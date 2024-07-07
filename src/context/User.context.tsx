import { useContext, createContext, useState, useEffect } from "react";
import { useAuth } from "./Auth.context";
import { GetUser } from "../api/user";
import { userData, user } from "../interface/user.interface";

interface UserProviderProps {
    children: React.ReactNode
}


const UserContext = createContext<userData>({

    user: {
        first_name: "",
        second_name: "",
        last_name: "",
        second_surname: "",
        CI: "",
        gender: "",
        career: "",
        cohort: "",
        direction: "",
        phone: "",
        status: false,
        study_location: "",
        _id: ""
    }

})



export const UserProvider = ({ children }: UserProviderProps) => {

    const [user, setUser] = useState<user>({
        first_name: "",
        second_name: "",
        last_name: "",
        second_surname: "",
        CI: "",
        gender: "",
        career: "",
        cohort: "",
        direction: "",
        phone: "",
        status: false,
        study_location: "",
        _id: ""
    })

    const [dataLoaded, setDataLoaded] = useState(false);


    const { isUser, isAuthenticated, accessToken } = useAuth()



    useEffect(() => {

        const getUser = async () => {
            try {
                const response = await GetUser(isUser, accessToken);
                const responseData = response.data
                localStorage.setItem("userData", JSON.stringify(responseData));
                setUser(responseData)
                setDataLoaded(true);
            } catch (e) {
                console.log(e);
            }
        };


        const storedData = localStorage.getItem("userData");
        if (isAuthenticated && !dataLoaded) {
            if (storedData) {
                setUser(JSON.parse(storedData));
                setDataLoaded(true);
            } else {
                getUser()
            }
        }
    }, [isAuthenticated, dataLoaded, accessToken, isUser]);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);