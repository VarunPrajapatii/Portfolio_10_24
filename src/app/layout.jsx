import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBG from "@/components/FireFliesBG";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Varun's Digital Universe",
  description: "Welcome to Varun Prajapati's Digital Universe, where creativity meets technology. Explore a portfolio of innovative web development projects, showcasing expertise in full-stack development, cutting-edge frameworks, and modern design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBG />
        <Sound />
        <div id="my-modal"></div>
      </body>
    </html>
  );
}
