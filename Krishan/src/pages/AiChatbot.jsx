import React, { useState } from 'react';
import axios from 'axios';

const AiChatbot = () => {
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);

    const handleSend = async () => {
        if (!message.trim()) return;

        // Add user message to conversation
        setConversation((prev) => [...prev, { role: 'user', content: message }]);

        // Send message to backend
        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message });
            const botReply = response.data.reply;

            // Add bot reply to conversation
            setConversation((prev) => [...prev, { role: 'bot', content: botReply }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        // Clear input
        setMessage('');
    };

    return (
        <div>
            <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', padding: '10px' }}>
                {conversation.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                        <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default AiChatbot;