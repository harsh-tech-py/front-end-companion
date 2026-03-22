import { ChevronLeft, Settings, Search, Plus, MoreVertical, ChevronDown } from "lucide-react";
import { useChatContext } from "@/context/ChatContext";
import { useMemo } from "react";

const ChatSidebar = () => {
  const { contacts, activeContactId, setActiveContactId, searchQuery, setSearchQuery } = useChatContext();

  const filtered = useMemo(
    () =>
      contacts.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [contacts, searchQuery]
  );

  return (
    <div className="w-72 flex flex-col bg-card rounded-2xl overflow-hidden shrink-0">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 pt-5 pb-2">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-foreground">Chat</h2>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center px-5 py-4 relative">
        <button className="absolute top-2 right-5 text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="w-4 h-4" />
        </button>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            alt="Jontray Arnold"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-primary rounded-full border-2 border-card" />
        </div>
        <h3 className="mt-2 font-semibold text-foreground">Jontray Arnold</h3>
        <button className="mt-1.5 flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium hover:bg-accent/80 transition-colors">
          available
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Search */}
      <div className="px-5 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary rounded-lg pl-3 pr-8 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Last chats header */}
      <div className="flex items-center justify-between px-5 pb-2">
        <span className="text-sm text-muted-foreground">Last chats</span>
        <div className="flex items-center gap-1">
          <button className="w-6 h-6 flex items-center justify-center text-primary hover:bg-accent rounded-md transition-colors">
            <Plus className="w-4 h-4" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-md transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto px-2">
        {filtered.length === 0 && (
          <p className="text-xs text-muted-foreground text-center py-4">No chats found</p>
        )}
        {filtered.map((chat) => (
          <button
            key={chat.id}
            onClick={() => setActiveContactId(chat.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
              activeContactId === chat.id ? "bg-secondary" : "hover:bg-secondary/50"
            }`}
          >
            {chat.avatar ? (
              <div className="relative shrink-0">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-card" />
                )}
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium shrink-0">
                {chat.initials}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground truncate">{chat.name}</span>
                <span className="text-xs text-muted-foreground shrink-0 ml-2">{chat.time}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-0.5">{chat.lastMessage}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
