import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   menu aplikasi
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Divisions", to: "/divisions" },
    { label: "About", to: "/about" },
  ];
  return (
    <nav className="border-b bg-kala-primary/30 backdrop-blur-lg text-white sticky top-0 border-kala-secondary/10 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold flex gap-2 items-center">
          <img
            src="./logo-kala-light.svg"
            alt="logo-kala"
            className="max-h-8 rounded-sm"
          />
          <div>
            <h1 className="text-sm font-extrabold tracking-widest uppercase">
              Kala Group
            </h1>
            <p className="text-xs font-light">Beyond Boundaries</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 border p-2 rounded-full bg-white/3 border-white/10 backdrop-blur-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors px-3 py-1 rounded-2xl font-normal ${isActive ? "font-semibold bg-white/10 text-white" : "text-white/70 hover:text-white px-3 py-1"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon-lg"
          className="md:hidden bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-white/10 pt-4 pb-2 px-6 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `py-2 px-4 rounded-md ${isActive ? "font-semibold bg-white/20" : "text-white/70 hover:text-white"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
