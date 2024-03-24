import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

const UserAuth = ({children}) => {

    const navigate = useNavigate();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser!==null){
        return children;
    }else{
       enqueueSnackbar('Please Login First', { variant: 'error' });
        navigate('/user/Login');
    }
}

export default UserAuth