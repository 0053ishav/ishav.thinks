import { notFound } from 'next/navigation';
import Image from 'next/image';
import * as React from 'react';

import { getBlogPost, getCompiledMDX, getBlogPostsByCategory } from '@/lib/mdx';
import * as MdxComponents from '@/components/mdx/MdxComponents';
import { BlogTimeline } from '@/components/blog/BlogTimeline';
import { cn } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = params;

  if (!category || !slug) notFound();

  const decodedCategory = decodeURIComponent(category).toLowerCase();
  const post = await getBlogPost(decodedCategory, slug);

  if (!post) notFound();

  const [content, relatedPosts] = await Promise.all([
    getCompiledMDX(post.content, { components: MdxComponents }),
    getBlogPostsByCategory(decodedCategory),
  ]);

  if (!relatedPosts || relatedPosts.length === 0) notFound();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-[1fr_250px] md:py-16">
        <article className="max-w-3xl">
          {post.coverImage && (
            <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
          <header className="mb-8">
            <div className="mb-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </header>
          <div
            className={cn(
              'prose prose-lg',
              'prose-headings:text-foreground prose-p:text-foreground',
              'prose-strong:text-foreground dark:prose-strong:text-foreground',
              'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
              'prose-li:text-foreground',
              'prose-pre:bg-muted prose-pre:border prose-pre:border-border',
              'prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none',
              'prose-blockquote:text-foreground/80 prose-blockquote:border-l-primary',
              'prose-hr:border-border',
              'dark:prose-invert dark:prose-p:text-foreground dark:prose-headings:text-foreground'
            )}
          >
            {content}
          </div>
        </article>
        <aside>
          <BlogTimeline posts={relatedPosts} currentPost={post} />
        </aside>
      </div>
    </div>
  );
}