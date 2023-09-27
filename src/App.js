
import 'react-chatbot-kit/build/main.css';
import React from 'react'
import Chatbot from 'react-chatbot-kit'
import MessageParser from './chatbot/MessageParser'
import config from './chatbot/config'
import ActionProvider from './chatbot/ActionProvider'
import EnrollmentPage from './components/EnrollmentPage';
import ConfirmationMessage from './components/ConfirmationPage';
import { useSelector } from 'react-redux';
import './App.css';
function App() {

  const step = useSelector((state) => state.chats.step);

  console.log(step);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <EnrollmentPage />;
      case 2:
        return   <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}

      />;
      case 3 : 
      return <ConfirmationMessage/>
      default:
        return null;
    }
  };
  return (
    <div className="container">
    <header>
      <h1>Student Enrollment</h1>
    </header>
    <main className="app-content">
      {renderStep()}
    </main>
  </div>
  )
}

export default App