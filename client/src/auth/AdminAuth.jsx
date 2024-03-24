import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AdminAuth = ({children}) => {

    const navigate = useNavigate();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('admin')));

    if(currentUser!==null){
        return children;
    }else{
      enqueueSnackbar('Please Login First', { variant: 'error' });
        navigate('/user/adminlogin');
    }
}

export default AdminAuth