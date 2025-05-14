import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Footer Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="text-xl font-bold text-foreground">
                 ishavThinks
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Exploring life&apos;s journey through words, wisdom, and wonder.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Categories</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/blog/life" className="text-sm text-muted-foreground hover:text-foreground">
                    Life Musings
                  </Link>
                </li>
                <li>
                  <Link href="/blog/finance" className="text-sm text-muted-foreground hover:text-foreground">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    All Posts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Connect</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="https://twitter.com/ishav07" target="_blank" rel="noopener noreferrer" 
                     className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/0053ishav" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-muted-foreground hover:text-foreground">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/0053ishav" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Stay Updated</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Subscribe to get notified about new posts.
              </p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ishav Thinks. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 