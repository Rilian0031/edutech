

import React, { useState } from 'react';
import axios from 'axios';
// import './ChatComponent.css';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Display the user's message immediately
    setMessages([...messages, { role: 'user', text: input }]);

    try {
      // Send the message to the backend API
      const response = await axios.post('/api/chat', { message: input });

      // Display the AI's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', text: response.data.text },
      ]);
    } catch (error) {
      console.error('Error communicating with AI:', error);
    } finally {
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
