import React from 'react';


const MessageParser = ({ children, actions }) => {


    const parse = (message) => {
        if (message.includes('hello')) {
          actions.handleHello();
        }

        if(message.includes("clear")){
            actions.handleClear();
        }

        if( message.toLowerCase().includes("reschedule")){
            actions.handleReschedule(); // we will handle later
        }
       
    }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;