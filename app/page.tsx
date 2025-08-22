import { Button } from "@/components/ui/button"
import Image from "next/image"
import AnimatedDataFlow from "@/components/animated-data-flow"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 glass-effect border-b border-border/50">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto gap-3 sm:gap-0">
          <div className="flex items-center gap-3">
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
          </div>
          <Link href="/waitlist">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 animate-pulse-glow text-sm sm:text-base">
              Join our waitlist for early access
            </Button>
          </Link>
        </div>
      </nav>

      <section className="px-4 sm:px-6 py-12 sm:py-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-60 h-40 sm:h-60 bg-secondary rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-lg animate-bounce">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            Coming Soon
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight font-serif tracking-tight px-2">
            Data Analytics for <span className="text-primary">Everyone</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary mb-6 sm:mb-8 font-serif px-2">
            Turn Any Data Into Instant Insights
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-sans px-4">
            Compasslystics makes analytics effortless. Whether you're an individual or an enterprise, get instant
            answers from your data and act faster than ever.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href="/waitlist" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                Join our waitlist for early access
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight font-serif">
                Your time is valuable—focus on <span className="text-primary">decisions</span>, not manual analytics.
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-sans">
                Traditional analytics take weeks of cleaning data, writing queries, and building reports. With
                Compasslystics, you skip the hassle: simply upload your data, ask questions in plain language, and get
                instant insights, interactive dashboards, and complete ready-to-share reports. From data to decision in
                minutes—not weeks.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-base sm:text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Upload your data
                    </h3>
                    <p className="text-muted-foreground font-sans text-xs sm:text-sm">
                      Drag and drop files in any format - CSV, Excel, JSON, or connect directly to your databases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary-foreground font-bold text-base sm:text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Ask your question
                    </h3>
                    <p className="text-muted-foreground font-sans text-xs sm:text-sm">
                      Type questions in plain English like "What are my top performing products this quarter?"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-base sm:text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 font-serif">
                      Get instant dashboards & reports
                    </h3>
                    <p className="text-muted-foreground font-sans text-xs sm:text-sm">
                      Receive interactive visualizations and professional reports ready to share with your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <AnimatedDataFlow />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-4xl mx-auto px-2">
              Compasslystics doesn't just give you fast answers—it's packed with powerful features that make analyzing,
              visualizing, and sharing your data effortless. Here's how we help you turn raw data into actionable
              insights, step by step:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 font-serif">
                Connect Your Data
              </h3>
              <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                Upload files or connect directly to your live databases in seconds. Supported formats include CSV,
                Excel, and JSON.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-secondary-foreground font-bold text-base sm:text-lg">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 font-serif">
                Chat With Your Data
              </h3>
              <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                Ask questions in plain English and get instant AI-powered insights, visualizations, and smart
                suggestions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 font-serif">
                Interactive Dashboards in Seconds
              </h3>
              <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                Dashboards update dynamically based on your inputs. Explore KPIs, charts, and graphs with interactive
                filters.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-secondary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-secondary-foreground font-bold text-base sm:text-lg">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 font-serif">
                Preview and Export Reports
              </h3>
              <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                Generate professional-ready PDF or PowerPoint reports automatically. Summarize insights, KPIs, and
                charts with one click.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-primary-foreground font-bold text-base sm:text-lg">5</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 font-serif">
                Built for Collaboration
              </h3>
              <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed">
                Comment on dashboards, tag teammates, share secure links, and manage access with role-based permissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 font-serif px-2">
            Join us Now - what are you waiting for?
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href="/waitlist" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Join Waitlist
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Image
                src="/images/compasslystics-logo-white-bg.png"
                alt="Compasslystics Logo"
                width={40}
                height={40}
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold font-serif">Compasslystics</span>
            </div>
            <p className="text-primary-foreground/80 font-sans text-xs sm:text-sm leading-relaxed max-w-md mb-6 sm:mb-8 px-4">
              Turn any data into instant insights. The AI-powered analytics platform that speaks your language.
            </p>

            <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 w-full">
              <p className="text-primary-foreground/60 text-xs sm:text-sm font-sans">
                © 2025 Compasslystics. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
