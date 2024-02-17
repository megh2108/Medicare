import { createContext, useContext , useState} from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
    
    
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    
    // const [token, setToken] = useState(localStorage.getItem("Medicare_Token"));
    
    // below vali ek method che jene comment kareli che pan ena karta sari k stiretoken vala function ma
    //je server parthi aave che ene hu setToken funcation the store kari dau ane pachi localstorage par set karu.
    
    const adminAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:6500/api/auth/admin-auth", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responseData = await response.json();
            console.log("response", responseData.message);

            if (response.status === 200) {
                toast.success(` ${responseData.message}`);
          }
            else{               
                navigate("/Home");                    
            }

        } catch (error) {
            console.log(error);
        }
    };



    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("Medicare_Token",serverToken);
    } 

    //for toggling logout or login/signup
    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedin ", isLoggedIn);
  

    const logoutUser = ()=>{

        setToken("");
        return localStorage.removeItem("Medicare_Token");

    }



    return (
        <Authcontext.Provider value={{storeTokenInLS, logoutUser, isLoggedIn, token, adminAuthentication}} >
            {children}
        </Authcontext.Provider>
    )

}

export const useAuth = ()=> {

    const authContextValue = useContext(Authcontext);

    if(!authContextValue){
        throw new Error("useAuth used outside of provider");
    }
    return authContextValue;
};