import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  coverImage?: string;
  author: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  slug,
  coverImage,
  author,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${category.toLowerCase()}/${slug}`} className="block h-full">
      <Card className="h-full overflow-hidden transition-all transform duration-300 ease-in-out hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/40 border border-transparent">
        {coverImage && (
          <div className="relative aspect-video w-full overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader className="space-y-2 p-4">
          <div className="flex items-center justify-between">
            <time dateTime={date} className="text-sm text-muted-foreground">
              {date}
            </time>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {category}
            </span>
          </div>
          <h3 className="line-clamp-2 text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="px-4 py-2">
          <p className="line-clamp-3 text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="px-4 py-2">
          <p className="text-sm text-muted-foreground">By {author}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
