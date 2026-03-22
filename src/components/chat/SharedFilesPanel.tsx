import { ChevronRight, MoreVertical, FolderOpen, Link2, FileText, Image, Film, FileBox } from "lucide-react";

const fileTypes = [
  { icon: FileText, label: "Documents", count: "127 files", size: "193MB", color: "bg-primary/15 text-primary" },
  { icon: Image, label: "Photos", count: "53 files", size: "321MB", color: "bg-orange-100 text-orange-500" },
  { icon: Film, label: "Movies", count: "3 files", size: "210MB", color: "bg-sky-100 text-sky-500" },
  { icon: FileBox, label: "Other", count: "49 files", size: "194MB", color: "bg-rose-100 text-rose-400" },
];

const SharedFilesPanel = () => {
  return (
    <div className="w-64 flex flex-col bg-card rounded-2xl overflow-hidden shrink-0">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 pt-5 pb-3">
        <button className="text-muted-foreground hover:text-foreground">
          <ChevronRight className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold text-foreground">Shared files</h2>
      </div>

      {/* Group info */}
      <div className="flex flex-col items-center px-5 py-4">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop"
          alt="Real estate deals"
          className="w-16 h-16 rounded-full object-cover"
        />
        <h3 className="mt-2 font-semibold text-foreground text-sm">Real estate deals</h3>
        <span className="text-xs text-muted-foreground">10 members</span>
      </div>

      {/* Stats */}
      <div className="flex gap-3 px-5 pb-4">
        <div className="flex-1 bg-accent rounded-xl p-3 text-center relative">
          <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          <div className="text-xs text-muted-foreground mb-1">All files</div>
          <div className="flex items-center justify-center gap-1.5">
            <FolderOpen className="w-4 h-4 text-primary" />
            <span className="text-xl font-bold text-primary">231</span>
          </div>
        </div>
        <div className="flex-1 bg-secondary rounded-xl p-3 text-center">
          <div className="text-xs text-muted-foreground mb-1">All links</div>
          <div className="flex items-center justify-center gap-1.5">
            <Link2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-xl font-bold text-foreground">45</span>
          </div>
        </div>
      </div>

      {/* File type header */}
      <div className="flex items-center justify-between px-5 pb-2">
        <span className="text-sm text-muted-foreground">File type</span>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      {/* File types list */}
      <div className="flex-1 overflow-y-auto px-3">
        {fileTypes.map((ft) => (
          <button
            key={ft.label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary/50 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ft.color}`}>
              <ft.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="text-sm font-medium text-foreground">{ft.label}</p>
              <p className="text-xs text-muted-foreground">
                {ft.count}, {ft.size}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SharedFilesPanel;
