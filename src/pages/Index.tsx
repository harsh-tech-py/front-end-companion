import IconSidebar from "@/components/chat/IconSidebar";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import SharedFilesPanel from "@/components/chat/SharedFilesPanel";

const Index = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <div className="flex w-full max-w-[1280px] h-[700px] gap-0">
        {/* Icon sidebar */}
        <IconSidebar />

        {/* Main content card */}
        <div className="flex flex-1 gap-4 min-w-0">
          <ChatSidebar />
          <ChatArea />
          <SharedFilesPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
