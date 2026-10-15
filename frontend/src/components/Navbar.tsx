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
    <nav className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold">
          Kala Group
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "font-semibold" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t pt-4 pb-2 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `py-2 ${isActive ? "font-semibold" : ""}`
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
