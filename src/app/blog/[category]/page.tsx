import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostsByCategory } from '@/lib/mdx';
import { AnimatedSection, H1, P, Grid, Card } from '@/components/mdx/MdxComponents';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category.toLowerCase();
  const posts = await getBlogPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  const categoryDisplayNames = {
    'ai': 'Artificial Intelligence',
    'finance': 'Finance & Investment',
    'life': 'Life & Personal Growth'
  };

  const categoryDescriptions = {
    'ai': 'Exploring the fascinating world of AI, machine learning, and their impact on our future.',
    'finance': 'Insights on personal finance, investment strategies, and financial independence.',
    'life': 'Thoughts on personal growth, productivity, and life experiences.'
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <H1>{categoryDisplayNames[category as keyof typeof categoryDisplayNames]}</H1>
        <P>
          {categoryDescriptions[category as keyof typeof categoryDescriptions]}
        </P>
      </AnimatedSection>
      <Grid cols={2}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${category}/${post.slug}`}
            className="block"
             >
            <Card className="h-full transition-transform hover:scale-[1.02]">
              {post.coverImage && (
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>
              )}
              <div className="mb-2 flex items-center justify-between">
                <time dateTime={post.date} className="text-sm text-muted-foreground">
                  {post.date}
                </time>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {post.category}
                </span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
                {post.title}
              </h2>
              <p className="mb-4 text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="text-sm text-muted-foreground">
                By {post.author}
              </div>
            </Card>
          </Link>
        ))}
      </Grid>
    </div>
  );
} 