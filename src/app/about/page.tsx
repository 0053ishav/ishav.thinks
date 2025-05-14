"use client";
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
} from "@/components/mdx/MdxComponents";

export default function AboutPage() {
  const frontendSkills = [
    "React & Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL"];

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <H1>About Me</H1>
        <P>
          Hi, I&apos;m Ishav! I&apos;m a passionate developer and writer who
          loves building things for the web. I believe in creating experiences
          that are both beautiful and functional.
        </P>
      </AnimatedSection>

      <AnimatedSection>
        <H2>What I Do</H2>
        <Grid cols={3}>
          <Card>
            <h3 className="mb-2 text-xl font-bold">Development</h3>
            <p className="text-muted-foreground">
              Building modern web applications with React, Next.js, and
              TypeScript.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-bold">Writing</h3>
            <p className="text-muted-foreground">
              Sharing insights about technology, development, and personal
              growth.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-xl font-bold">Design</h3>
            <p className="text-muted-foreground">
              Creating beautiful and intuitive user interfaces with attention to
              detail.
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
              {frontendSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </AnimatedList>
          </FeatureSection>
          <FeatureSection>
            <h3 className="mb-4 text-xl font-bold">Backend</h3>
            <AnimatedList>
              {backendSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </AnimatedList>
          </FeatureSection>
        </Grid>
      </AnimatedSection>

      <AnimatedSection>
        <H2>My Journey</H2>
        <P>
          My journey in tech started with a curiosity about how things work on
          the internet. That curiosity led me to explore web development, and
          I&apos;ve been hooked ever since.
        </P>
        <KeyPoint>
          I believe in continuous learning and sharing knowledge with the
          community. This blog is my way of giving back and documenting my
          journey.
        </KeyPoint>
      </AnimatedSection>

      <AnimatedSection>
        <H2>Get in Touch</H2>
        <P>
          I&apos;m always excited to connect with fellow developers and tech
          enthusiasts. Feel free to reach out to me on social media or through
          email.
        </P>
        <Grid cols={3}>
          <Card className="text-center">
            <h3 className="mb-2 text-xl font-bold">Twitter</h3>
            <a
              href="https://twitter.com/0053ishav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @Ishav07
            </a>
          </Card>

          <Card className="text-center">
            <h3 className="mb-2 text-xl font-bold">GitHub</h3>
            <a
              href="https://github.com/0053ishav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/0053ishav
            </a>
          </Card>

          <Card className="text-center">
            <h3 className="mb-2 text-xl font-bold">Email</h3>
            <a
              href="https://mail.ishav.space"
              className="text-primary hover:underline"
            >
              mail@ishav.space
            </a>
          </Card>
        </Grid>
      </AnimatedSection>
    </div>
  );
}