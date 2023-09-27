import { createChatBotMessage } from "react-chatbot-kit";
import Button from "../components/ChatbotControlButton";
import DateSelector from "../components/DateSelector";
import TimeSlot from "../components/TimeSlot";
import AgeDropDown from "../components/AgeDropDown";
import NameInput from "../components/NameInput";
import ExitMessage from "../components/ExitMessage";
const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello, Welcome to the student info system!`,

      {
        widget: "button",
      }
    ),
  ],
  botName: "Enrollment Bot",
  widgets: [
    {
      widgetName: "button",
      widgetFunc: (props) => <Button {...props} />,
    },
    {
      widgetName: "dateSelector",
      widgetFunc: (props) => <DateSelector {...props} />,
    },
    {
      widgetName: "timeSlot",
      widgetFunc: (props) => <TimeSlot {...props} />,
    },
    {
      widgetName: "ageDropDown",
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
    {
      widgetName: "nameInput",
      widgetFunc: (props) => <NameInput {...props} />,
    },
    {
      widgetName: "exitMessage",
      widgetFunc: (props) => <ExitMessage {...props} />,
    },
  ],
  state: {
    prevsFormId: null,
  },
};

export default config;
