import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const navigate = useNavigate();

    const LoginPage = () => {
        navigate('/main/Login');
    }

    useEffect(() => {
        if (currentUser === null) {
            LoginPage();
        }
    }, [currentUser])
  

    if(currentUser!==null){
        return children;
    }else{
       enqueueSnackbar('Please Login First', { variant: 'error' });
        LoginPage();
    }
}

export default UserAuth