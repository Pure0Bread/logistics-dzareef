import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function Layout() {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      
      {/* 2. Sidebar */}
      <div className="flex-shrink-0 h-full">
        <Sidebar />
      </div>

      {/* 3. Header */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        <Header />

        {/* 4. Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}