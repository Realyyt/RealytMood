import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen h-full flex flex-col md:flex-row">
      <aside className=" fixed top-0 left-0 w-full h-full md:w-[200px] md:h-full border-b md:border-r border-black/10 flex justify-center md:justify-start">
        Mood
      </aside>
      <div className="flex-1 flex flex-col  top-0 right-0 pl-[200px]">
        <header className="h-[60px] border-b border-black/10">
          <div className="flex justify-end items-center h-full w-full px-4">
            <UserButton />
          </div>
        </header>
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
