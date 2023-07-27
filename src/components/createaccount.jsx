import React,{useState, useContext} from "react";
import {UserContext} from './context';
import Card from './card';

function CreateAccount(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);
  
    function validate (field, label){
      if(!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
   
      if (label === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(field)) {
          alert('invalid email format');
          setTimeout(() => setStatus('', 3000));
          return false;
        }
      }

      if (label === 'password') {
        if (field.length < 8) {
          alert('password must be at least 8 characters');
          setTimeout(() => setStatus(''), 3000);
          return false;
        }
      }
      return true;
    }

    function handleCreate(){
      console.log(name,email,password);
      // Check if the name field is empty
      if (!name.trim()) {
      alert("Name cannot be left blank");
      return;
      }

      if (!validate(name, 'name')) return;
      if (!validate(email, 'email')) return;
      if (!validate(password, 'password')) return;

     
      ctx.users.push({name,email,password,balance:0});
      setShow(false);
    }
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    const isButtonDisabled = !name && !email && !password;

    return (
      <div style={{backgroundImage: "url('./assets/beach3.jpg')",  backgroundSize: "1440px 860px",
      backgroundPosition: "center center",
      minHeight: "100vh" }}>

      <Card 
        bgcolor="dark"
        txtcolor="white"
        header="Create Account"
        status={status}
        body={show ? (
          <>
          Name<br/>
          <input 
          type="input"
          className="form-control"
          id="name"
          placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}/><br/>
         
          Email Address<br/>
          <input 
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}/><br/>
          
          Password<br/>
          <input 
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
          <button 
          type="submit"
          className="btn btn-light"
          onClick={handleCreate}
          disabled={isButtonDisabled}
          >Create New Account
          </button>
          </>
        ) : (
          <>
          <h5>Success</h5>
          <button 
          type="submit"
          className="btn btn-light"
          onClick={clearForm}>Create Another Account
          </button>
          </>
        )}
        />
        </div>
    );
    }
        
export default CreateAccount;