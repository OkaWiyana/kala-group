import { NavLink } from "react-router-dom";

function Footer() {
  const sosmed = [
    { label: "Instagram", to: "https://www.instagram.com/kala.archives" },
    { label: "Tik Tok", to: "https://www.tiktok.com/@kala.archives" },
  ];
  return (
    <footer className="bg-kala-primary py-4 bottom-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-y-5 justify-center md:justify-between px-6 md:px-8 text-white/70">
        <p className="text-center">© 2026 Kala Group | All rights reserved.</p>
        <div className="flex gap-5 justify-center md:justify-start">
          {sosmed.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              target="_blank"
              className={"hover:text-white justify-center"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
