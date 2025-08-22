"use client"

import { useState, useEffect } from "react"

const steps = [
  {
    title: "Sample Data",
    content: (
      <div className="space-y-3">
        <div className="text-sm font-semibold text-foreground mb-3">sales_data.csv</div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs bg-muted/50 p-2 rounded">
            <span>Product</span>
            <span>Revenue</span>
            <span>Date</span>
          </div>
          <div className="flex justify-between text-xs p-2">
            <span>iPhone 15</span>
            <span>$12,500</span>
            <span>Jan 2024</span>
          </div>
          <div className="flex justify-between text-xs p-2">
            <span>MacBook Pro</span>
            <span>$8,900</span>
            <span>Jan 2024</span>
          </div>
          <div className="flex justify-between text-xs p-2">
            <span>iPad Air</span>
            <span>$6,200</span>
            <span>Jan 2024</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Question Asked",
    content: (
      <div className="space-y-4">
        <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
          <div className="text-xs text-muted-foreground mb-2">You asked:</div>
          <div className="text-sm font-medium text-foreground">"What are my top performing products this quarter?"</div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          Processing your data...
        </div>
      </div>
    ),
  },
  {
    title: "Dashboard & Report",
    content: (
      <div className="space-y-4">
        <div className="text-sm font-semibold text-foreground mb-3">Q1 2024 Performance Report</div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs">iPhone 15</span>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-primary rounded-full"></div>
              <span className="text-xs font-medium">$12.5K</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">MacBook Pro</span>
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 bg-secondary rounded-full"></div>
              <span className="text-xs font-medium">$8.9K</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">iPad Air</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-2 bg-primary/60 rounded-full"></div>
              <span className="text-xs font-medium">$6.2K</span>
            </div>
          </div>
        </div>
        <div className="bg-secondary/10 rounded-lg p-3 mt-4">
          <div className="text-xs font-medium text-secondary">Key Insight:</div>
          <div className="text-xs text-muted-foreground mt-1">iPhone 15 leads with 45% of total revenue</div>
        </div>
      </div>
    ),
  },
]

export default function AnimatedDataFlow() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 h-80">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-foreground font-serif">{steps[currentStep].title}</h4>
            <div className="flex gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="transition-all duration-500 ease-in-out">{steps[currentStep].content}</div>
        </div>
      </div>
    </div>
  )
}
