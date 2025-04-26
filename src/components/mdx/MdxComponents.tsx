'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3 }
};

// Styled Headings
export const H1 = ({ children }: { children: React.ReactNode }) => (
  <motion.h1
    {...fadeInUp}
    className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl border-b pb-4 border-primary/20"
  >
    {children}
  </motion.h1>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...slideIn}
    className="mt-12 mb-6 text-3xl font-bold text-foreground border-l-4 border-primary/60 pl-4"
  >
    {children}
  </motion.h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <motion.h3
    {...slideIn}
    className="mt-8 mb-4 text-2xl font-semibold text-foreground border-l-2 border-primary/40 pl-3"
  >
    {children}
  </motion.h3>
);

// Styled Paragraphs
export const P = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="my-6 leading-7 text-foreground/90"
  >
    {children}
  </motion.p>
);

// Feature Section
export const FeatureSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    {...scaleIn}
    className="my-12 rounded-xl border bg-card/50 p-6 shadow-sm"
  >
    {children}
  </motion.div>
);

// Animated List
export const AnimatedList = ({ children }: { children: React.ReactNode }) => (
  <motion.ul
    initial="initial"
    animate="animate"
    className="my-6 ml-6 list-disc marker:text-primary"
  >
    {React.Children.map(children, (child, i) => (
      <motion.li
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      >
        {child}
      </motion.li>
    ))}
  </motion.ul>
);

// Blockquote with style
export const Quote = ({ children }: { children: React.ReactNode }) => (
  <motion.blockquote
    {...slideIn}
    className="my-8 border-l-4 border-primary pl-6 italic text-foreground/80"
  >
    {children}
  </motion.blockquote>
);

// Code block with style
export const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <motion.pre
    {...scaleIn}
    className="my-6 overflow-x-auto rounded-lg border bg-muted p-4 font-mono text-sm"
  >
    {children}
  </motion.pre>
);

// Existing components with enhanced styling
export const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="my-12"
  >
    {children}
  </motion.div>
);

export const Callout = ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'tip' }) => {
  const styles = {
    info: 'border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300',
    warning: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
    tip: 'border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-300',
  };

  return (
    <motion.div
      {...fadeInUp}
      className={cn(
        'my-6 rounded-lg border-l-4 p-4',
        styles[type]
      )}
    >
      {children}
    </motion.div>
  );
};

export const KeyPoint = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    {...slideIn}
    className="my-8 rounded-lg border-l-4 border-primary bg-primary/5 p-4 font-medium"
  >
    {children}
  </motion.div>
);

export const Grid = ({ children, cols = 2 }: { children: React.ReactNode; cols?: 2 | 3 | 4 }) => (
  <div className={cn(
    'my-8 grid gap-6',
    cols === 2 && 'md:grid-cols-2',
    cols === 3 && 'md:grid-cols-3',
    cols === 4 && 'md:grid-cols-4'
  )}>
    {children}
  </div>
);

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className={cn(
      'rounded-lg border bg-card p-6 shadow-sm transition-colors hover:border-primary/50',
      className
    )}
  >
    {children}
  </motion.div>
);

// Image with caption
export const Figure = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <motion.figure
    {...fadeInUp}
    className="my-8"
  >
    <div className="overflow-hidden rounded-lg">
      <motion.img
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        src={src}
        alt={alt}
        className="w-full"
      />
    </div>
    {caption && (
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        {caption}
      </figcaption>
    )}
  </motion.figure>
);

// Highlight text
export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-primary font-medium">
    {children}
  </span>
);

// Steps remain the same but with enhanced styling
export const Steps = ({ children }: { children: React.ReactNode }) => (
  <div className="ml-4 mt-8 border-l-2 border-primary/30 pl-6 [counter-reset:step]">
    {children}
  </div>
);

export const Step = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    {...slideIn}
    className="mb-8 [counter-increment:step]"
  >
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
        <span className="[&::before:content:counter(step)]" />
      </div>
      <h3 className="m-0 text-xl font-bold">{children}</h3>
    </div>
  </motion.div>
); 