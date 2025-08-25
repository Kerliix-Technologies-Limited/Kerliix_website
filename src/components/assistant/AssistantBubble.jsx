import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import ChatWindow from "./ChatWindow";

export default function AssistantBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label={open ? "Close Assistant" : "Open Assistant"}
      >
        <FiMessageCircle size={28} />
      </button>

      {/* Chat window */}
      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
