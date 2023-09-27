import React, { useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { nextStep, selectDate, selectTime, setAge, setName } from "../store";

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 15px",
  marginLeft: "10px",
  cursor: "pointer",
};

function ChatbotControlButton(props) {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handleNameSelect = (name) => {
    dispatch(setName(name));
    const clientMessage = createClientMessage(name);
    updateMessages(clientMessage);
    props.actions.showAgeDropDown(handleAgeSelect);
  };

  const handleClose = () => {
    dispatch(nextStep());
  };

  const handleAgeSelect = (age) => {
    dispatch(setAge(age));
    const clientMessage = createClientMessage(age);
    updateMessages(clientMessage);
    props.actions.showExitMessage(handleClose);
  };

  const handleTimeSelect = (time) => {
    dispatch(selectTime(time));
    const clientMessage = createClientMessage(time);
    updateMessages(clientMessage);
    props.actions.showNameInput(handleNameSelect);
  };

  const handleDateSelect = (date) => {
    dispatch(selectDate(date));
    const clientMessage = createClientMessage(date);
    updateMessages(clientMessage);
    props.actions.showTimeSlot(handleTimeSelect);
  };

  const handleClick = () => {
    const clientMessage = createClientMessage('Got it!');
    updateMessages(clientMessage);
    setClicked(true);
    props.actions.showDateSelector(handleDateSelect);
  };

  const updateMessages = (clientMessage) => {
    props.setState((prev) => {
      const prevsFormId = prev.prevsFormId;
      const updatedMessages = prev.messages.map((message) => {
        if (message.id === prevsFormId) {
          return { ...message, widget: undefined };
        }
        return message;
      });

      return {
        ...prev,
        messages: [...updatedMessages, clientMessage],
      };
    });
  };

  return (
    <button style={buttonStyle} onClick={handleClick} disabled={clicked}>
      Got it.
    </button>
  );
}

export default ChatbotControlButton;
