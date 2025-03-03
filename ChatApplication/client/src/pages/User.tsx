import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";



function User() {
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState([] as string[]); 
  const socket = io("http://localhost:3000");

  useEffect(() => {
   
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]); 
    });

    // Cleanup on unmount
    return () => {
      socket.off("chat message"); 
    };
  }, [message]);

  const sendMessage = (e) => {
    e.preventDefault(); 
    console.log(message)
    if (message.trim()) {
        socket.emit('chat message', message); // Emit message to the backend
        setMessage(''); // Clear input field
    }
};


  return (
    <div>
      <h1>Real-time Chat</h1>
      <div
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {/* Display messages */}
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={{ width: "300px", padding: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default User;
