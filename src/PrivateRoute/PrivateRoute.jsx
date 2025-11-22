import React, { useContext } from "react";
import { AuthContext } from "../contects/Authindex";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <div className="mt-5 ">
            <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    if(user){
        return children;
    }
    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    )
}

export default PrivateRoute