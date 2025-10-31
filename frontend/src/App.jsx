import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './assets/pages/Home';
import Login from './assets/components/Login';
import Signup from './assets/components/Signup';
import MyResultPage from './assets/pages/MyResultPage';
//private  protected route
function RequiredAuth({children}){
  const  isLoggedIn = Boolean(localStorage.getItem('authToken'));
  const location = useLocation();
  if(!isLoggedIn){
    return <Navigate to='/login' state={{from: location}} replace/>;
  }
  return children;
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path = '/signup' element={<Signup/>}/>
     <Route path ='/result' element={
      <RequiredAuth>
        <MyResultPage/>
      </RequiredAuth>
      }/>
    </Routes>
  );
};

export default App;
