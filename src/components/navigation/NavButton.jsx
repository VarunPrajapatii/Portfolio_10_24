//To style the buttons
import {
  Github,
  Home,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
      break;
    default:
      break;
  }
};

const item= {
  hidden: {scale: 0},
  show: {scale: 1}
};

const NavLink = motion(Link); //To wrap the Link with motion we do like this

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection="right" }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50 "
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              download={label === "Resume" ? "Varun Prajapati's Resume.pdf" : undefined}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aia-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div
            className="cursor-pointer z-50 "
            
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aia-label={label}
              name={label}
            >
              <span className="relative w-14 h-14 p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap", labelDirection==="left" ? "right-full left-auto": "")}>
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;

/**
 * So, there is different positions for these icons, then I have added the rotation animation in the parent of these icons.
 * Then I added the reverse rotation for the icons so that they stay still and do not rotate themselves.
 * Then I paused the main rotation of the icon's parent div on hover. That will also pause the rotation of the icons.
 *
 */
