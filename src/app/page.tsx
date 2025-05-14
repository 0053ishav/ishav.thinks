import MainNav from "@/components/shared/MainNav";
import HeroSection from "@/components/home/HeroSection";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";


// Sample featured posts data
const featuredPosts = [
  {
    title: "What Running Taught Me About Consistency",
    excerpt: "Discover how maintaining a running routine can teach valuable life lessons about consistency and growth.",
    image: "/images/blog/life/life.jpg",
    category: "Life",
    slug: "life/running-consistency-lessons"
  },
  {
    title: "Understanding Index Funds",
    excerpt: "A beginner's guide to index funds and why they might be the perfect investment choice for you.",
    image: "/images/blog/finance/finance.jpg",
    category: "Finance",
    slug: "finance/understanding-index-funds"
  },
  {
    title: "Ai Introduction",
    excerpt: "How AI is reshaping industries and human experiences in 2024 and beyond.",
    image: "/images/blog/ai/ai.jpg",
    category: "AI",
    slug: "ai/ai-introduction"
  }
];

const categories = [
  { name: "Life", href: "/blog/life" },
  { name: "Finance", href: "/blog/finance" },
  { name: "AI", href: "/blog/ai" },
  // { name: "Productivity", href: "/blog/productivity" },
  // { name: "Mindset", href: "/blog/mindset" },
  // { name: "Culture", href: "/blog/culture" }
];

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <HeroSection />

        {/* Featured Posts */}
        <section className="py-16 sm:py-24">
          <Container>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Featured Posts
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <Card>
                    <div className="aspect-video relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                         sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover transform transition-all duration-500 ease-in-out hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{post.category}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Read More →
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Categories */}
        <section className="border-t  py-16">
          <Container>
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
              Explore by Category
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:scale-105"
                   >
                  {category.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
