import React,{useState, useEffect, useContext} from "react";
import {UserContext} from './context';
import Card from './card';
import '../index.css';

function Deposit() {
    const [showDeposit, setShowDeposit] = useState(true);
    const [status, setStatus] = useState('');
    const [deposit, setDeposit] = useState('');
    const [balance, setBalance] = useState(() => {
      const storedBalance = localStorage.getItem('balance');
      return storedBalance ? parseFloat(storedBalance) : 0;
    });
    const ctx = useContext(UserContext);
  
    useEffect(() => {
    localStorage.setItem('balance', balance);
    }, [balance]); 
    
    function validate(field, label) {
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
      return true;
    }
  
    function handleDeposit() {
      if (!validate(deposit, 'deposit')) return;

      const depositAmount = parseFloat(deposit);
      
      if(isNaN(depositAmount)) {
        alert('what are you doing? that is not a number');
        return;
      }
      
      if (depositAmount < 0) {
        alert('how do you deposit a negative number?');
        return;
      }
      
      const newBalance = parseFloat(balance) + parseFloat(deposit);
      setBalance(newBalance);
      setShowDeposit(false);
    }
  
    function clearDepositForm() {
      setDeposit('');
      setShowDeposit(true);
    }
  
    const isButtonDisabled = deposit === '';
  
    return (
      <div style={{backgroundImage: "url('./assets/farm.jpg')",  backgroundSize: "1440px 860px",
      backgroundPosition: "center center",
      minHeight: "100vh" }}>
        {showDeposit && (
          <Card
            bgcolor="dark"
            txtcolor="light"
            header="Deposit"
            status={status}
            body={
              <>
                Balance ${balance} <br />
                Deposit<br />
                <input
                  type="input"
                  className="form-control"
                  id="deposit"
                  placeholder="Deposit Amount"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}
                />
                <br />
  
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleDeposit}
                  disabled={isButtonDisabled}
                >
                  Deposit
                </button>
              </>
            }
          />
        )}
  
        {!showDeposit && (
          <Card
            bgcolor="success"
            txtcolor="light"
            header="Deposit"
            status={status}
            body={
              <>
                <h5>Success</h5>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearDepositForm}
                >
                  Check Updated Balance
                </button>
              </>
            }
          />
        )}
      </div>
    );
  }
  
export default Deposit;
  
  