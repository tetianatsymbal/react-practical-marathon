const remoteUrl = "wss://boiling-beach-26008.herokuapp.com";
const localUrl = "ws://localhost:8082";
const remoteUrl2 = "wss://ws.postman-echo.com/raw";

const client = new WebSocket(localUrl);
client.onmessage = ({ data }) => {
  setMessage(data);
};

function send() {
  const userNameInput = document.getElementById("userName");
  const messageInput = document.getElementById("message");
  const userName = userNameInput.value;
  const message = messageInput.value;

  let textMessage = userName ? `${userName}: ${message}` : message;
  client.send(textMessage);
  userNameInput.value = "";
  messageInput.value = "";
}

function setMessage(message) {
  const textarea = document.getElementById("chat");
  textarea.innerHTML += `${message}\n`;
}
