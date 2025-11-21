import { Navigation } from "@/components/Navigation";

export default function InternalLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="browse-shell">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}