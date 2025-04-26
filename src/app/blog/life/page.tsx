import * as React from 'react';
import BlogCard from '@/components/blog/BlogCard';
import { getBlogPostsByCategory } from '@/lib/mdx';
import { Container } from '@/components/ui/container';

export default async function LifeMusingsPage() {
  const posts = await getBlogPostsByCategory('Life');

  return (
    <Container>
      {/* Header */}
      <div className="py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Life Musings
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Personal reflections, experiences, and lessons learned along the way.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
        {posts.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            No posts found in this category.
          </p>
        )}
      </div>
    </Container>
  );
} 