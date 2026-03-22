import { Compass, ClipboardCheck, Eye, Users, BarChart3, Video } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Compass, label: "Explore", id: "explore" },
  { icon: ClipboardCheck, label: "Tasks", id: "tasks" },
  { icon: Eye, label: "Watch", id: "watch" },
  { icon: Users, label: "Contacts", id: "contacts" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Video, label: "Calls", id: "calls" },
];

const IconSidebar = () => {
  const [activeNav, setActiveNav] = useState("contacts");

  return (
    <div className="flex flex-col items-center py-6 gap-2 w-16 shrink-0">
      <div className="mb-6">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L28 28H4L16 4Z" fill="hsl(var(--primary))" />
          <path d="M16 12L22 24H10L16 12Z" fill="hsl(var(--destructive))" opacity="0.8" />
        </svg>
      </div>

      <div className="flex flex-col gap-1 items-center flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
              activeNav === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            title={item.label}
          >
            {activeNav === item.id && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
            )}
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      <div className="mt-auto">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
          alt="User"
          className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-primary transition-all"
        />
      </div>
    </div>
  );
};

export default IconSidebar;
