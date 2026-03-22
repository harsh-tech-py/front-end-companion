import IconSidebar from "@/components/chat/IconSidebar";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatArea from "@/components/chat/ChatArea";
import SharedFilesPanel from "@/components/chat/SharedFilesPanel";
import { ChatProvider } from "@/context/ChatContext";

const Index = () => {
  return (
    <ChatProvider>
      <div className="flex items-center justify-center min-h-screen bg-background p-4">
        <div className="flex w-full max-w-[1280px] h-[700px] gap-0">
          <IconSidebar />
          <div className="flex flex-1 gap-4 min-w-0">
            <ChatSidebar />
            <ChatArea />
            <SharedFilesPanel />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
};

export default Index;
