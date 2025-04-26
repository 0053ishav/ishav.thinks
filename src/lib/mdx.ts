import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' 
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'src/content')

const categoryConfig = {
  'ai': {
    title: 'AI',
    displayName: 'Artificial Intelligence',
    path: 'ai'
  },
  'finance': {
    title: 'Finance',
    displayName: 'Finance & Investment',
    path: 'finance'
  },
  'life': {
    title: 'Life',
    displayName: 'Life & Personal Growth',
    path: 'life'
  }
} as const;

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  slug: string
  coverImage?: string
  content: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const categories = Object.keys(categoryConfig)
  const posts: BlogPost[] = []

  for (const category of categories) {
    const categoryPosts = await getBlogPostsByCategory(category)
    posts.push(...categoryPosts)
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const categoryKey = category.toLowerCase();
  
  // Check if category exists in config
  if (!(categoryKey in categoryConfig)) {
    return [];
  }
  
  const categoryPath = path.join(rootDirectory, 'blog', categoryConfig[categoryKey as keyof typeof categoryConfig].path)
  const posts: BlogPost[] = []
  
  if (!fs.existsSync(categoryPath)) return posts

  const files = fs.readdirSync(categoryPath)
  
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue
    
    const filePath = path.join(categoryPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    posts.push({
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: categoryConfig[categoryKey as keyof typeof categoryConfig].title,
      author: data.author,
      slug: file.replace('.mdx', ''),
      coverImage: data.coverImage,
      content
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPost(category: string, slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPostsByCategory(category)
  return posts.find(post => post.slug === slug) || null
}

export async function getCompiledMDX(source: string, components?: Record<string, any>) {
  const { content } = await compileMDX({
    source,
    components,
    options: { parseFrontmatter: true }
  })
  
  return content
} 