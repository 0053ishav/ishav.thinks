import { AnimatedSection, H1, P, Quote, Grid, Card } from '@/components/mdx/MdxComponents';

interface QuoteType {
  text: string;
  author: string;
  source?: string;
}

const quotes: QuoteType[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Stewart Brand",
    source: "Whole Earth Catalog"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck"
  }
];

export default function QuotesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <H1>Inspiring Quotes</H1>
        <P>
          A collection of quotes that inspire me in my journey through technology, design, and life.
          These words of wisdom have shaped my thinking and approach to problem-solving.
        </P>
      </AnimatedSection>

      <Grid cols={2}>
        {quotes.map((quote, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <Quote>
              {quote.text}
            </Quote>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">— {quote.author}</p>
              {quote.source && (
                <p className="mt-1 italic">{quote.source}</p>
              )}
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  );
} 