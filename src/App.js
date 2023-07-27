import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import { UserProvider } from './components/context';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';


const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <UserProvider> 
        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="/CreateAccount/" element={<CreateAccount />} /> 
         
          <Route path="/deposit/"  element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
       
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </UserProvider>
    </HashRouter>
  );
};

export default App;



