// app/contact/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";

// Google Form constants
const GOOGLE_FORM_ID =
  "1FAIpQLScnaH2VDOXt-42BHcWjI7-_hl7-EHQgrKV6dWK1f5q2vajzug";
const FORM_ACTION = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

// entry IDs (from your prefilled URL)
const ENTRY_EMAIL = "897158438";
const ENTRY_MESSAGE = "1094210645";
const ENTRY_COMPANY = "269696470";
const ENTRY_SUBJECT = "1920956403";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  // Capture the form element BEFORE any await
  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    await fetch(FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    form.reset();       // safe now
    setSent(true);
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
          <Link href="/" className="flex items-center gap-3">
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
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <section className="px-4 sm:px-6 py-8 sm:py-16 gradient-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-serif">
              Let's Talk
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
              Have questions, feedback, or need assistance? Our team at Compasslystics is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg">
              {/* Success / error banners */}
              {sent && (
                <div className="mb-4 rounded-lg border border-green-300 bg-green-100 px-4 py-3 text-green-800" role="status" aria-live="polite">
                  ✅ Your message has been sent. We’ll get back to you soon.
                </div>
              )}
              {error && (
                <div className="mb-4 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-red-800" role="alert">
                  {error}
                </div>
              )}

              {/* FORM — no action/target; handled by JS */}
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-serif">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="w-full"
                    placeholder="your.email@company.com"
                    name={`entry.${ENTRY_EMAIL}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-serif">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us more..."
                    name={`entry.${ENTRY_MESSAGE}`}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2 font-serif">
                    Company / Organization
                  </label>
                  <Input
                    id="company"
                    type="text"
                    className="w-full"
                    placeholder="Your company name (optional)"
                    name={`entry.${ENTRY_COMPANY}`}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 font-serif">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    className="w-full"
                    placeholder="What's this about?"
                    name={`entry.${ENTRY_SUBJECT}`}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 text-base sm:text-lg font-semibold rounded-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center font-sans">
                  We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 font-serif">Alternative Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground font-serif">Email</p>
                      <a href="mailto:contact@compasslystics.com" className="text-secondary hover:text-secondary/80 transition-colors font-sans text-sm sm:text-base break-all">
                        contact@compasslystics.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 font-serif">Quick Response</h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm sm:text-base">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
            </div>
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
