import * as React from 'react';
import MainNav from '@/components/shared/MainNav';
import { Container } from '@/components/ui/container';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default async function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <MainNav />
      <Container className="relative py-8">
        {children}
      </Container>
    </>
  );
} 