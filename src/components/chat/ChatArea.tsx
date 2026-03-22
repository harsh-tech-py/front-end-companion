import { Smile, Paperclip, Send, ChevronRight } from "lucide-react";
import { useChatContext } from "@/context/ChatContext";
import { useState, useRef, useEffect } from "react";

const participants = [
  { name: "Jontray Arnold (You)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", role: "Admin" },
  { name: "Kate Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face", role: "Member" },
  { name: "Evan Scott", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face", role: "Member" },
  { name: "Tamara Shevchenko", initials: "TS", role: "Member" },
  { name: "Joshua Clarkson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face", role: "Member" },
  { name: "Jeroen Zoet", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face", role: "Member" },
];

const ChatArea = () => {
  const { messages, sendMessage, activeTab, setActiveTab, contacts, activeContactId } = useChatContext();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const activeContact = contacts.find((c) => c.id === activeContactId);
  const chatTitle = activeContact?.isGroup ? "Group Chat" : activeContact?.name || "Chat";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-card rounded-2xl overflow-hidden min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">{chatTitle}</h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === "messages" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Messages
          </button>
          <button
            onClick={() => setActiveTab("participants")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === "participants" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Participants
          </button>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {activeTab === "messages" ? (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {messages.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">No messages yet. Start the conversation!</p>
            )}
            {messages.map((msg) => (
              <div key={msg.id}>
                <p className={`text-xs text-muted-foreground mb-1 ${msg.isSelf ? "text-right" : ""}`}>
                  {msg.sender}, {msg.time}
                </p>
                <div className={`flex ${msg.isSelf ? "justify-end" : "justify-start"} items-end gap-2`}>
                  {!msg.isSelf && msg.avatar && (
                    <img src={msg.avatar} alt={msg.sender} className="w-8 h-8 rounded-full object-cover shrink-0" />
                  )}
                  {!msg.isSelf && !msg.avatar && (
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-medium shrink-0">
                      {msg.sender.split(" ").map(w => w[0]).join("")}
                    </div>
                  )}
                  <div className="max-w-[70%]">
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.isSelf
                          ? "bg-chat-self text-foreground rounded-br-md"
                          : msg.text.includes("@Kate")
                          ? "bg-chat-highlight text-foreground rounded-bl-md"
                          : "bg-chat-other text-foreground rounded-bl-md"
                      }`}
                    >
                      {msg.text.includes("@Kate") ? (
                        <span>
                          <span className="text-primary font-medium">@Kate</span>
                          {msg.text.replace("@Kate", "")}
                        </span>
                      ) : (
                        msg.text
                      )}
                    </div>
                    {msg.attachment && (
                      <div className="mt-1.5 flex items-center gap-2 bg-muted rounded-xl px-3 py-2">
                        <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 18h12a2 2 0 002-2V6l-4-4H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs text-foreground truncate">{msg.attachment.name}</span>
                        <button className="ml-auto text-muted-foreground hover:text-foreground">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    )}
                    {msg.reactions && (
                      <div className="flex gap-1 mt-1 justify-end">
                        {msg.reactions.map((r, i) => (
                          <span key={i} className="text-lg cursor-pointer hover:scale-125 transition-transform">{r}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Compose */}
          <div className="px-6 py-4 border-t border-border">
            <div className="flex items-center gap-3 bg-secondary rounded-2xl px-4 py-3">
              <input
                type="text"
                placeholder="Write your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Paperclip className="w-5 h-5" />
              </button>
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Participants tab */
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
          <p className="text-sm text-muted-foreground mb-3">{participants.length} participants</p>
          {participants.map((p) => (
            <div key={p.name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary/50 transition-colors">
              {p.avatar ? (
                <img src={p.avatar} alt={p.name} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                  {p.initials}
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatArea;
