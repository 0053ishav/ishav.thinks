"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { motion } from "framer-motion";

// Sample AI-style quotes (you can replace with real-time API later)
const quotes = [
  "Discipline compounds faster than money.",
  "Clarity is the real luxury of the modern world.",
  "Thinking deeply is a lost art — reclaim it.",
  "Wealth builds slowly, then all at once.",
  "Your calendar reveals your true priorities.",
];

const HeroSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-32 sm:py-40">
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          >
            Welcome to  ishavThinks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-lg leading-8 text-muted-foreground"
          >
            Life is complex. Money matters. Let&apos;s talk about both.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="flex items-center justify-center gap-x-6"
          >
            <Button asChild size="lg">
              <Link href="/blog"  >Start Exploring</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                title: "What Running Taught Me About Discipline",
                href: "/blog/running-discipline",
              },
              {
                title: "Zerodha Lessons: My Investing Rulebook",
                href: "/blog/zerodha-lessons",
              },
              {
                title: "Productivity Without Hustle Culture",
                href: "/blog/productivity-calm",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="p-4 bg-muted/20 rounded-xl shadow hover:bg-muted transition-all duration-300"
                 >
                <h3 className="font-semibold text-md text-foreground">
                  {post.title}
                </h3>
              </Link>
            ))}
          </motion.div>

          {/* AI Quote Section */}
          <motion.blockquote
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl italic text-accent-foreground pt-6"
          >
            “{quotes[quoteIndex]}”
          </motion.blockquote>
        </div>

        {/* Background Animation: Intelligent Deep Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] transition-all duration-700"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
              animation: "subtleFlow 20s infinite ease-in-out",
            }}
          />
        </motion.div>

        {/* Floating Pulse Aura (Subtle & Mindful) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              animation: "glowShift 12s infinite ease-in-out",
            }}
          />
        </motion.div>
      </Container>
      <style jsx global>{`
        @keyframes subtleFlow {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-20px) translateY(10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes glowShift {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(15deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
