import { Button } from "@/components/ui/button";
import { Play, Tv, Users, Zap } from "lucide-react";
import Link from "next/link";

const Page = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/80 to-background/40 z-10" />

        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6">
            Watch Live Sports,
            <br />
            <span className="text-primary">Anywhere, Anytime</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stream your favorite sports live in HD. Football, Basketball, Tennis, Boxing and more.
          </p>
          <Link href={'/browse'}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <Play className="w-6 h-6 mr-2" />
              Start Watching Now
            </Button>

          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Why Choose LiveArena?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Live HD Streaming</h3>
              <p className="text-muted-foreground">
                Watch every match in crystal clear high definition with minimal buffering.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Multiple Sources</h3>
              <p className="text-muted-foreground">
                Choose from various stream sources for the best viewing experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Global Coverage</h3>
              <p className="text-muted-foreground">
                Access sports events from around the world, all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Browse Streams</h3>
              <p className="text-muted-foreground">
                Explore live and upcoming sports events from various categories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Choose Source</h3>
              <p className="text-muted-foreground">
                Select from multiple streaming sources for optimal quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Watch & Enjoy</h3>
              <p className="text-muted-foreground">
                Sit back and enjoy high-quality live sports streaming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Watching?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of sports fans streaming live matches right now.
          </p>
          <Link href={'/browse'}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <Play className="w-6 h-6 mr-2" />
              Browse Live Streams
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2025 LiveArena. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;