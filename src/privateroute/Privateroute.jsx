import React, { useContext } from 'react';
import { AuthContext } from '../components/authprovider/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if (loading) {
        return (
            <div className="flex justify-center items-center ">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    
    if (user){
        return children ;
    }
   
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default Privateroute;