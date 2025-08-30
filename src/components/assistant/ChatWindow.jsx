import React, { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import MessageBubble from "./MessageBubble";
import API from "../../api";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await API.post("/assistant/chat", {
        message: newMessage.text,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: response.data.reply },
      ]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "assistant", text: "Oops! Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-3">
        <span className="font-semibold">Assistant</span>
        <button onClick={onClose}>
          <FiX size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((msg, i) => (
          <MessageBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        {loading && <MessageBubble sender="assistant" text="Typing..." />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center border-t p-2 bg-white"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg flex items-center justify-center"
          disabled={loading}
        >
          <FiSend size={18} />
        </button>
      </form>
    </div>
  );
                      }
