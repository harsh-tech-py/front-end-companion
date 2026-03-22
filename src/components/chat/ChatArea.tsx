import { Smile, Paperclip, Send, ChevronRight } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isSelf?: boolean;
  avatar?: string;
  hasEmoji?: boolean;
  reactions?: string[];
  attachment?: { name: string; type: string };
}

const messages: Message[] = [
  {
    id: 1,
    sender: "Evan Scott",
    text: "Hi everyone, let's start the call soon 😄",
    time: "11:24 AM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 2,
    sender: "Kate Johnson",
    text: "Recently I saw properties in a great location that I did not pay attention to before 😄",
    time: "11:24 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 3,
    sender: "Evan Scott",
    text: "Ooo, why don't you say something more",
    time: "11:25 AM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 4,
    sender: "Evan Scott",
    text: "@Kate ? 😄",
    time: "11:25 AM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    hasEmoji: true,
  },
  {
    id: 5,
    sender: "You",
    text: "She creates an atmosphere of mystery 😏",
    time: "11:26 AM",
    isSelf: true,
    reactions: ["😎", "😄"],
  },
  {
    id: 6,
    sender: "Evan Scott",
    text: "Kate, don't be like that and say something more :) 😄",
    time: "11:34 AM",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 7,
    sender: "Kate Johnson",
    text: "What's in it for me? 😄",
    time: "11:35 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: 8,
    sender: "You",
    text: "here's the document 😄",
    time: "11:37 AM",
    isSelf: true,
    attachment: { name: "new_document_2020b.pdf", type: "pdf" },
  },
];

const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-card rounded-2xl overflow-hidden min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">Group Chat</h2>
        <div className="flex items-center gap-1">
          <button className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            Messages
          </button>
          <button className="px-4 py-1.5 rounded-full text-muted-foreground text-sm font-medium hover:text-foreground">
            Participants
          </button>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id}>
            {/* Sender label */}
            {!msg.isSelf && (
              <p className="text-xs text-muted-foreground mb-1">
                {msg.sender}, {msg.time}
              </p>
            )}
            {msg.isSelf && (
              <p className="text-xs text-muted-foreground mb-1 text-right">
                You, {msg.time}
              </p>
            )}

            <div className={`flex ${msg.isSelf ? "justify-end" : "justify-start"} items-end gap-2`}>
              {!msg.isSelf && msg.avatar && (
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                />
              )}
              <div className={`max-w-[70%]`}>
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.isSelf
                      ? "bg-chat-self text-foreground rounded-br-md"
                      : msg.hasEmoji
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
                      <span key={i} className="text-lg">{r}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compose */}
      <div className="px-6 py-4 border-t border-border">
        <div className="flex items-center gap-3 bg-secondary rounded-2xl px-4 py-3">
          <input
            type="text"
            placeholder="Write your message..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button className="text-muted-foreground hover:text-foreground">
            <Smile className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            <Paperclip className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
