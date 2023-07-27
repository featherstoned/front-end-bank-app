import React from 'react';
import Card from './card';

const Home = () => {
  const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: `url('./assets/sunsetwestside.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '1440px 860px', 
  };

  const cardStyle = {
    alignItems: 'left',
    maxWidth: '20rem',
    marginBottom: '200px',
    padding: '25px',
    backgroundColor: 'transparent',
    borderRadius: '15px',
  };

  const textStyle = {
    textAlign: 'center',
    fontFamily: 'Noto Sans JP',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <Card
          bgcolor="dark"
          txtcolor="light"
          header={<h1 className="text-center"
          style={{
            fontFamily: "Noto Sans JP",
          }}
          > Aloha Bank
           </h1>}
          body={
            <>
          <h2 style={textStyle}> 
          E Komo Mai <br/> 
          & <br/> 
          Welcome 
          </h2>    
        </>
          }
          />
      </div>
    </div>
  );
};

export default Home;

