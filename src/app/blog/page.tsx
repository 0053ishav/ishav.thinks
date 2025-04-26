import * as React from 'react';
import BlogCard from '@/components/blog/BlogCard';
import { getBlogPosts } from '@/lib/mdx';
import { Container } from '@/components/ui/container';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Container>
      {/* Header */}
      <div className="py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Latest Posts
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore my thoughts on life, finance, and everything in between.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </Container>
  );
} 