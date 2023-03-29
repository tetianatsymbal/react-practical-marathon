import { useEffect, useState } from "react";
import "./App.css";

function App({ ws }) {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("");
  useEffect(() => {
    ws.onmessage = ({ data }) => {
      setChat((prev) => prev + `${data}\n`);
    };
  }, [ws]);

  const send = () => {
    let textMessage = userName ? `${userName}: ${message}` : message;
    ws.send(textMessage);
    setMessage("");
    setUserName("");
  };

  return (
    <div className="App">
      <h1>Web Sockets</h1>
      <div>
        <textarea
          rows="30"
          cols="60"
          readOnly
          aria-label="chat"
          onChange={(e) => e.target.value}
          value={chat}
        />
      </div>
      <input
        type="text"
        placeholder="Your nickname"
        size="11"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="text"
        placeholder="Type your message"
        size="40"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={send}>Send</button>
    </div>
  );
}

export default App;
