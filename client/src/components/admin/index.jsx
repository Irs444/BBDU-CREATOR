import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'


const Admin = () => {
  return (
    <div>
       <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-0">
            <SideBar/>
          </div>
            <div className="col-md-8 p-0">
                <Outlet/>
                </div>
        </div>
       </div>
      
    </div>
  )
}

export default Admin