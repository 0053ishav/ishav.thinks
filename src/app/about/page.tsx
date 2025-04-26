import {
  AnimatedSection,
  H1,
  H2,
  P,
  FeatureSection,
  AnimatedList,
  KeyPoint,
  Grid,
  Card,
} from '@/components/mdx/MdxComponents';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <H1>About Me</H1>
        <P>
          Hi, I'm Ishav! I'm a passionate developer and writer who loves building things for the web.
          I believe in creating experiences that are both beautiful and functional.
        </P>
      </AnimatedSection>

      <AnimatedSection>
        <H2>What I Do</H2>
        <Grid cols={3}>
          <Card>
            <h3 className="mb-2 text-xl font-bold">Development</h3>
            <p className="text-muted-foreground">
              Building modern web applications with React, Next.js, and TypeScript.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-bold">Writing</h3>
            <p className="text-muted-foreground">
              Sharing insights about technology, development, and personal growth.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-bold">Design</h3>
            <p className="text-muted-foreground">
              Creating beautiful and intuitive user interfaces with attention to detail.
            </p>
          </Card>
        </Grid>
      </AnimatedSection>

      <AnimatedSection>
        <H2>Skills & Technologies</H2>
        <Grid cols={2}>
          <FeatureSection>
            <h3 className="mb-4 text-xl font-bold">Frontend</h3>
            <AnimatedList>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </AnimatedList>
          </FeatureSection>
          <FeatureSection>
            <h3 className="mb-4 text-xl font-bold">Backend</h3>
            <AnimatedList>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </AnimatedList>
          </FeatureSection>
        </Grid>
      </AnimatedSection>

      <AnimatedSection>
        <H2>My Journey</H2>
        <P>
          My journey in tech started with a curiosity about how things work on the internet.
          That curiosity led me to explore web development, and I've been hooked ever since.
        </P>
        <KeyPoint>
          I believe in continuous learning and sharing knowledge with the community.
          This blog is my way of giving back and documenting my journey.
        </KeyPoint>
      </AnimatedSection>

      <AnimatedSection>
        <H2>Get in Touch</H2>
        <P>
          I'm always excited to connect with fellow developers and tech enthusiasts.
          Feel free to reach out to me on social media or through email.
        </P>
        <Grid cols={3}>
          <Card className="text-center">
            <h3 className="mb-2 text-xl font-bold">Twitter</h3>
            <a href="https://twitter.com/yourusername" className="text-primary hover:underline">
              @yourusername
            </a>
          </Card>
          <Card className="text-center">
            <h3 className="mb-2 text-xl font-bold">GitHub</h3>
            <a href="https://github.com/yourusername" className="text-primary hover:underline">
              @yourusername
            </a>
          </Card>
          <Card className="text-center">
            <h3 className="mb-2 text-xl font-bold">Email</h3>
            <a href="mailto:your@email.com" className="text-primary hover:underline">
              your@email.com
            </a>
          </Card>
        </Grid>
      </AnimatedSection>
    </div>
  );
} 