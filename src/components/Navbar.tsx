import { useRef, useState } from "react";
import Button from "./ui/button";
import NavLink from "./ui/navLink";
import { useClickOutside } from "../hook/useClickOutside";

type NavbarProps = {};
const navLinks: string[] = ["home", "about", "product", "testimonials"];

export default function Navbar({}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  let navRef = useRef(null);
  const closeMenu = () => setIsOpen(false);
  useClickOutside(navRef, closeMenu);

  return (
    <header
      data-overlay={isOpen}
      className="flex items-center justify-between px-4 sm:px-6 sm:pr-3 xl:px-24"
    >
      <div className="flex items-center justify-between max-lg:w-full">
        <h1 className="text-3xl font-semibold tracking-tight">Shoes</h1>
        <div className="lg:hidden">
          <Button
            onClick={() => setIsOpen(true)}
            className="px-3 py-2 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </Button>
        </div>
      </div>

      <nav
        ref={navRef}
        className={`${isOpen ? "navbar open" : "navbar close"}`}
      >
        <Button
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "right-4 oapcity-100" : "right-[-100%] opacity-0"
          } lg:hidden fixed top-4 bg-shoeLightOrange text-shoeDark p-2 aspect-square transition-all duration-300 ease-in-out`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <ul className="flex flex-col lg:flex-row gap-4 lg:items-center justify-center h-[75%] ">
          {navLinks.map((link, index) => (
            <NavLink href={link} key={index} title={link} />
          ))}
        </ul>
      </nav>

      <div className="hidden lg:flex">
        <Button>Contact Us</Button>
      </div>
    </header>
  );
}
