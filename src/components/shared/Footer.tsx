"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { newsletterSubscription } from "@/lib/appwrite";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please provide a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const trimmedEmail = email.trim();
      if (!trimmedEmail || !trimmedEmail.includes("@")) {
        setMessage("Please enter a valid email.");
        return;
      }
      const result = await newsletterSubscription(trimmedEmail, "subscribe");

      if (result.success) {
        setIsSuccess(true);
        setMessage(result.message);
        setEmail("");
      } else {
        setIsSuccess(false);
        setMessage(result.message || "An error occured. Please try again.");
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
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
              <h3 className="text-sm font-semibold text-foreground">
                Categories
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/blog/life"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Life Musings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/finance"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
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
                  <a
                    href="https://twitter.com/ishav07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/0053ishav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/0053ishav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Stay Updated
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Subscribe to get notified about new posts.
              </p>
              <form className="mt-4" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
                {message && (
                  <p
                    className={`mt-2 text-sm ${
                      isSuccess ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
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