import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { UserSidebar } from './components/layouts/UserSidebar'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './components/user/UserProfile'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import "bootstrap/dist/css/bootstrap.min.css";
import AddHouse from './components/user/AddHouse'


function App() {
 

  return (
  <>
  
  <body className="layout-fixed sidebar-expand-lg bg-body-tertiary">
    <div className='app-wrapper'>
<Routes>
  <Route path='/user' element = {<UserSidebar></UserSidebar>}>
    <Route path='profile' element ={<UserProfile></UserProfile>}></Route>
    <Route path='addhouse' element ={<AddHouse></AddHouse>}></Route>
  </Route>
  <Route path='login' element = {<Login></Login>}></Route>
  <Route path='signup' element = {<Signup></Signup>}></Route>
</Routes>

    </div>
    </body>
</>

  );
}

export default App
