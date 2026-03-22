import { Compass, ClipboardCheck, Eye, Users, BarChart3, Video } from "lucide-react";

const navItems = [
  { icon: Compass, label: "Explore" },
  { icon: ClipboardCheck, label: "Tasks" },
  { icon: Eye, label: "Watch" },
  { icon: Users, label: "Contacts", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Video, label: "Calls" },
];

const IconSidebar = () => {
  return (
    <div className="flex flex-col items-center py-6 gap-2 w-16 shrink-0">
      {/* Logo */}
      <div className="mb-6">
        <div className="w-8 h-8 relative">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L28 28H4L16 4Z" fill="hsl(var(--primary))" />
            <path d="M16 12L22 24H10L16 12Z" fill="hsl(var(--destructive))" opacity="0.8" />
          </svg>
        </div>
      </div>

      {/* Nav Icons */}
      <div className="flex flex-col gap-1 items-center flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
              item.active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            title={item.label}
          >
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
            )}
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>

      {/* Bottom avatar */}
      <div className="mt-auto">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default IconSidebar;
