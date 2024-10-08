import HomeButton from "@/components/HomeButton";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-centre py-20 px-16">
        <HomeButton />
        {children}
    </main>
  );
}
