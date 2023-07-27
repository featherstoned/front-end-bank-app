import React, {useContext} from 'react';
import {UserContext} from './context';
import Card from './card';
  
const AllData = () => {
  const ctx = useContext(UserContext);

  return (
    <div style={{backgroundImage: "url('./assets/redshowertree.jpg')",  backgroundSize: "1440px 860px",
    backgroundPosition: "center center",
    minHeight: "100vh" }}>

      {ctx.users.map((user, index) => (
        <Card
          key={index}
          bgcolor="dark"
          txtcolor="white"
          header={`User ${index + 1}`}
          body={
            <>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Password:</strong> {user.password} <br />
              <strong>Opening Balance:</strong> ${user.balance.toFixed(2)} <br />
            </>
          }
        />
      ))}
    </div>
  );
};
export default AllData;






