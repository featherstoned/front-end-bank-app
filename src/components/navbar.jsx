import React from "react";
import { NavLink } from "react-router-dom"; 
import "../index.css";

const NavBar = () => {
  return (
    <nav className="navbar bg-secondary" 
    data-bs-theme="dark" 
    style={{ color: "white", fontFamily: "Noto Sans JP" }}>
      
      <div className="container-fluid">
        
        <NavLink className="navbar-brand" to="/">
          Aloha Bank
        </NavLink>
     
        <NavLink className="nav-link" 
        exact to="/deposit" 
        data-tooltip="Deposit Page">
          Deposit
        </NavLink>
        
        <NavLink className="nav-link" 
        exact to="/withdraw" 
        data-tooltip="Withdraw Page">
          Withdraw
        </NavLink>
       
        <NavLink className="nav-link" 
        exact to="/alldata" 
        data-tooltip="All Data Page">
        All Data
        </NavLink>
        
        <NavLink className="nav-link" 
        exact to="/createaccount" 
        data-tooltip="Create Account Page">
        Create Account 
        </NavLink>
      
      </div>
    </nav>
  );
};

export default NavBar;

   
 

//* DEFAULT TO THIS
// import React from "react";

// const NavBar = () => {
//     return (
//       <nav className="navbar bg-dark" data-bs-theme="dark" style={{color: "white", fontFamily:  'Noto Sans JP'}}>
//       <div className="container-fluid">
//       <a className="navbar-brand" href="#">Aloha Bank</a>
//       <a className="nav-link" href="#/login/">Login</a>
//       <a className="nav-link" href="#/deposit/">Deposit</a>
//       <a className="nav-link" href="#/withdraw/">Withdraw</a>
//       {/* <a className="nav-link" href="#/balance/">Balance</a> */}
//       <a className="nav-link" href="#/alldata/">All Data</a>
//       <a className="nav-link" href="#/createaccount/">Create Account</a>
//       </div>
//     </nav>
    
//     );
//   }

//   export default NavBar;
  
