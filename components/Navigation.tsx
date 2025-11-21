import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              LiveArena
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/browse" className="text-foreground hover:text-primary transition-colors font-medium">
                Browse
              </Link>
              <Link href="/browse" className="text-muted-foreground hover:text-foreground transition-colors">
                Live Now
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Schedule
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Categories
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Sign In
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
