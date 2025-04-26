'use client';

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
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
            Welcome to ishav.thinks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-lg leading-8 text-muted-foreground"
          >
            Insights. Ideas. Inspiration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="flex items-center justify-center gap-x-6"
          >
            <Button asChild size="lg">
              <Link href="/blog">
                Start Exploring
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Background Animation: Soft Color Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="absolute inset-0 transform-gpu bg-gradient-to-br from-[#6c5b7b] to-[#355c7d] opacity-80 dark:from-[#2c3e50] dark:to-[#34495e] transition-all duration-500"
            style={{
              clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)',
              animation: 'softGradientMovement 10s infinite linear',
            }}
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#ff9a8b] via-[#f7b7a3] to-[#f7c6bb] rounded-full blur-xl animate-pulse dark:opacity-40 dark:from-[#e74c3c] dark:to-[#c0392b]"
            style={{
              backgroundSize: '150px 150px',
              backgroundPosition: '0 0',
              animation: 'floatingParticles 5s infinite ease-in-out',
            }}
          />
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes softGradientMovement {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatingParticles {
          0% { background-position: 0 0; }
          100% { background-position: 150px 150px; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
