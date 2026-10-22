import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="relative min-h-screen">
      {/* background */}
      <div className="fixed -top-32 -left-32 h-150 w-150 rounded-full bg-purple-600/15 blur-[130px] pointer-events-none z-0" />
      <div className="fixed -bottom-32 -right-32 h-150 w-150 rounded-full bg-blue-500/20 blur-[130px] pointer-events-none z-0" />
      {/* grid pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid-pattern" />
      <div className="relative z-10">
        <Navbar />

        <main className="relative z-10">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Layout;
