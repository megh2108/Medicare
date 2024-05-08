import { createContext, useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {


    const [token, setToken] = useState("");
    const [id, setId] = useState("");

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
            else {
                navigate("/Home");
            }

        } catch (error) {
            console.log(error);
        }
    };



    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("Medicare_Token", serverToken);
    }


    //for fetching login userid

    const userId = (id) => {
        setId(id);
    }

    //for toggling logout or login/signup
    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedin ", isLoggedIn);


    const logoutUser = () => {

        setToken("");
        return localStorage.removeItem("Medicare_Token");

    }
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        type:'',
        phone: '',
        about: '',
        licenceno: '',
        special: '',
        qualification: '',
        experience: '',
        hospitalAffiliaion: '',
        image:'',
        availableTime: [{ startTime: '', endTime: '' }]

    });



    //fetching particular user
    useEffect(() => {
        const fetchUserById = async (id) => {
            try {
                const response = await fetch(`http://localhost:6500/api/admin/getOneUser/${id}`, {
                    method: "GET",
                });

                const responseData = await response.json();

                if (response.status === 404) {
                    toast.error(responseData.msg);
                }
                else if (response.status === 200) {

                    const mappedData = {
                        id: responseData._id || '',
                        name: responseData.name || '',
                        email: responseData.email || '',
                        type: responseData.type || '',
                        phone: responseData.phone || '',
                        about: responseData.about || '',
                        licenceno: responseData.licenceno || '',
                        special: responseData.special || '',
                        qualification: responseData.qualification || '',
                        experience: responseData.experience || '',
                        hospitalAffiliaion: responseData.hospitalAffiliaion || '',
                        image:responseData.image || '',
                        availableTime: [{ startTime: responseData.availableTime.startTime || '', endTime: responseData.availableTime.endTime ||'' }]
                    };
                    setFormData(mappedData);


                } else {
                    toast.error("Internal Server Error");
                }
            } catch (error) {
                toast.error("Failed to fetch. Check console for details.");
                console.error("Error:", error);
            }
        };

        if (id) {
            fetchUserById(id);

        }
    }, [id]);


    const [doctors, setDoctors] = useState([]);

    const getDoctorData = async () => {
        try {
            const response = await fetch("http://localhost:6500/api/admin/getDoctor", {
                method: "GET",
            });
            const responseData = await response.json();
            setDoctors(responseData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDoctorData();
    }, []);


    return (
        <Authcontext.Provider value={{ storeTokenInLS, logoutUser, isLoggedIn, token, adminAuthentication, userId, id ,formData , setFormData,doctors,setDoctors}} >
            {children}
        </Authcontext.Provider>
    )

}

export const useAuth = () => {

    const authContextValue = useContext(Authcontext);

    if (!authContextValue) {
        throw new Error("useAuth used outside of provider");
    }
    return authContextValue;
};