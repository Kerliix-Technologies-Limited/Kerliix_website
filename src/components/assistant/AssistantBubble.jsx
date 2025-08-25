import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function AssistantBubble() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat window */}
      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}