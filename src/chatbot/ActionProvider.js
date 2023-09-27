import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children, state }) => {
  const addMessage = (content, widget, payload) => {
    const message = createChatBotMessage(content, {
      widget,
      payload,
    });

    setState((prev) => ({
      ...prev,
      prevsFormId: message.id,
      messages: [...prev.messages, message],
    }));
  };

  const actions = {
    handleHello: (text) => {
      addMessage(`Hello. Nice to meet you. ${text}`);
    },
    handleClear: () => {
      setState((prev) => ({
        ...prev,
        messages: [],
      }));
    },
    showButton: () => {
      addMessage("", "button", { text: "Got it." });
    },
    showDateSelector: (onDateSelect) => {
      addMessage("Pick a date", "dateSelector", { onDateSelect });
    },
    showTimeSlot: (onTimeSelect) => {
      addMessage("Pick a time slot", "timeSlot", { onTimeSelect });
    },
    showNameInput: (onNameSubmit) => {
      addMessage("Enter your name", "nameInput", { onNameSubmit });
    },
    showAgeDropDown: (onAgeSelect) => {
      addMessage("Select your age", "ageDropDown", { onAgeSelect });
    },
    showExitMessage: (onClose) => {
      addMessage("Thank You! See you next Time", "exitMessage", { onClose });
    },
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { actions });
      })}
    </div>
  );
};

export default ActionProvider;
