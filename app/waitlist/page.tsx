"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FORM_ACTION = "https://docs.google.com/forms/d/e/REPLACE_ME/formResponse";
const ENTRY_EMAIL = "entry.1234567890";     // ← replace with your Email entry id
const ENTRY_USERNAME = "entry.0987654321";  // ← replace with your Username entry id (or remove if not needed)

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Honeypot field (hidden) to catch bots
  const [website, setWebsite] = useState(""); // if filled, we ignore submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // basic checks
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (website) {
      // bot detected, silently succeed
      setDone(true);
      return;
    }

    setLoading(true);
    try {
      // Build form-encoded body for Google Forms
      const data = new URLSearchParams();
      data.append(ENTRY_EMAIL, email);
      if (ENTRY_USERNAME && username) data.append(ENTRY_USERNAME, username);

      // IMPORTANT: Google Forms requires no-cors
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      // We can’t read the response in no-cors mode, so we optimistically show success.
      setDone(true);
      setEmail("");
      setUsername("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto gap-3 sm:gap-0">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="animate-float">
              <Image
                src="/images/compasslystics-logo-transparent.png"
                alt="Compasslystics Logo"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground font-serif">Compasslystics</span>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent w-full sm:w-auto"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <section className="px-4 sm:px-6 py-8 sm:py-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight font-serif px-2">
              Be the First to Unlock <span className="text-primary">Instant Insights</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground font-serif">
                  Join the Waitlist
                </CardTitle>
                <CardDescription className="text-muted-foreground font-sans text-sm sm:text-base">
                  Get early access and be among the first to experience Compasslystics.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot (hidden) */}
                  <div className="hidden">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-foreground font-sans">
                      Username (optional)
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className="bg-input border-border focus:ring-primary focus:border-primary"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground font-sans">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-input border-border focus:ring-primary focus:border-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || done}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-70"
                  >
                    {done ? "You're on the list 🎉" : loading ? "Joining..." : "Join Waitlist"}
                  </Button>

                  {error && (
                    <p className="text-sm text-red-500 text-center font-sans">{error}</p>
                  )}
                  {!error && done && (
                    <p className="text-xs text-muted-foreground text-center font-sans">
                      Thanks! Check your inbox for updates soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Right column unchanged */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 font-serif">Why Join Early?</h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Early Access
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      Be among the first to explore Compasslystics' AI analytics platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Skip the Wait
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      Start turning your data into actionable insights before official launch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Exclusive Updates
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      Get product news, tips, and sneak peeks delivered directly to your inbox.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Shape the Future
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      Provide feedback to help us build the features you care about most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Right column */}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
            <Image
              src="/images/compasslystics-logo-white-bg.png"
              alt="Compasslystics Logo"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-base sm:text-lg font-bold font-serif">Compasslystics</span>
          </div>
          <p className="text-primary-foreground/80 font-sans text-xs sm:text-sm">
            © 2025 Compasslystics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
