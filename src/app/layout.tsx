import { type Metadata } from "next";
import { FloatingNav } from "~/components/FloatingNavbar";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Ned O'Hara",
  description: "A portfolio built using nextjs",
};

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Thoughts",
    link: "/thoughts",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body>
        <main className="relative h-screen max-h-none w-screen max-w-none snap-y snap-mandatory antialiased">
          <FloatingNav navItems={navItems} />
          {children}
        </main>
      </body>
    </html>
  );
}
