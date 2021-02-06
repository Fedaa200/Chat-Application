import { ChatEngine } from "react-chat-engine";
import "./App.css";
// import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
const App = () => {
  // if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="620px"
      projectID="cbcd8d86-17a1-4ce9-93c3-b5f3dfb272ad"
      userName="fedaa2001"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
