// import React from 'react';
// import { GlobalContext } from './GlobalContext'
import { Navigate } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';


const RotasProtegidas = ({ children }: any) => {
    const login = true;
    //const { login } = React.useContext(GlobalContext);



    return (login) ? (
        <>
            <SideBar>
                {children}
            </SideBar>
        </>
    ) : (

        <Navigate to="/login" />
    );
};

export default RotasProtegidas;