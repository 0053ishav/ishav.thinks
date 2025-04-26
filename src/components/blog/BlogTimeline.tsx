'use client';
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/lib/mdx';
import { TimelineProgress } from './TimelineProgress';

interface BlogTimelineProps {
  posts: BlogPost[];
  currentPost?: BlogPost;
}

export function BlogTimeline({ posts, currentPost }: BlogTimelineProps) {
  const pathname = usePathname();

  // If we have a current post, filter posts by its category
  const filteredPosts = currentPost 
    ? posts.filter(post => post.category === currentPost.category)
    : posts;

  // Group posts by year and month
  const groupedPosts = filteredPosts.reduce((acc, post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });

    if (!acc[year]) {
      acc[year] = {};
    }
    if (!acc[year][month]) {
      acc[year][month] = [];
    }
    acc[year][month].push(post);
    return acc;
  }, {} as Record<number, Record<string, BlogPost[]>>);

  // Sort years and months in descending order
  const sortedYears = Object.keys(groupedPosts)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="sticky top-24 space-y-6">
      <div className="space-y-2">
        <h2 className="font-semibold text-foreground">
          {currentPost ? `More in ${currentPost.category}` : 'All Posts'}
        </h2>
        {currentPost && (
          <Link 
            href="/blog" 
            className="text-sm text-muted-foreground hover:text-primary"
          >
            View all categories
          </Link>
        )}
      </div>

      <div className="relative space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-border">
        {sortedYears.map((year) => (
          <div key={year} className="space-y-2">
            <div className="text-sm font-medium text-foreground">{year}</div>
            {Object.entries(groupedPosts[year]).map(([month, monthPosts]) => (
              <div key={month} className="relative space-y-2 pl-4">
                <div className="text-sm text-muted-foreground">{month}</div>
                <div className="relative space-y-2 border-l border-transparent pl-4">
                  {currentPost && <TimelineProgress />}
                  {monthPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.category.toLowerCase()}/${post.slug}`}
                      className={cn(
                        "block text-sm transition-colors hover:text-primary",
                        pathname === `/blog/${post.category.toLowerCase()}/${post.slug}`
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
} 