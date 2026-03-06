import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowLeft, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { createArticleSchema } from "@/lib/schemas";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://forgegym.co.uk/blog/${post.slug}/`,
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", textAlign: "center" }}>
        <h1 className="font-heading text-4xl uppercase">Post Not Found</h1>
        <Link href="/blog" className="text-brand-gold hover:underline font-mono text-sm" style={{ marginTop: "1rem", display: "inline-block" }}>
          Back to Blog
        </Link>
      </section>
    );
  }

  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    date: post.date,
    author: post.author,
    image: post.image,
    url: `https://forgegym.co.uk/blog/${post.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="section-padding bg-brand-black" style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

          {/* Meta */}
          <div className="flex flex-wrap items-center" style={{ gap: "1rem", marginBottom: "1.5rem" }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] bg-brand-gold text-brand-black rounded-full" style={{ paddingLeft: "0.75rem", paddingRight: "0.75rem", paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>
              {post.category}
            </span>
            <span className="flex items-center text-brand-muted text-xs font-mono" style={{ gap: "0.375rem" }}>
              <Clock size={14} /> {post.readTime}
            </span>
            <span className="flex items-center text-brand-muted text-xs font-mono" style={{ gap: "0.375rem" }}>
              <User size={14} /> {post.author}
            </span>
            <span className="text-brand-muted text-xs font-mono">
              {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl uppercase tracking-tight" style={{ marginBottom: "2rem" }}>
            {post.title}
          </h1>

          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden" style={{ marginBottom: "3rem" }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-sm text-brand-white/90" style={{ maxWidth: "none", display: "flex", flexDirection: "column", gap: "1.5rem", lineHeight: "1.85" }}>
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-brand-white/90 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back link */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-gold hover:text-brand-gold-light font-mono text-sm uppercase tracking-[0.1em] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded"
              style={{ gap: "0.5rem" }}
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {(() => {
        const related = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        return related.length > 0 ? (
          <section className="section-padding bg-brand-dark">
            <div style={{ maxWidth: "48rem", marginLeft: "auto", marginRight: "auto" }}>
              <h2 className="font-heading text-3xl uppercase tracking-tight" style={{ marginBottom: "2rem" }}>
                Keep Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1.5rem" }}>
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none rounded-lg">
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden" style={{ marginBottom: "0.75rem" }}>
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-heading text-sm uppercase tracking-wide text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                      {r.title}
                    </h3>
                    <span className="font-mono text-xs text-brand-muted" style={{ marginTop: "0.25rem", display: "block" }}>
                      {r.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* CTA */}
      <section className="section-padding bg-brand-dark" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "32rem", marginLeft: "auto", marginRight: "auto" }}>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-brand-gold block" style={{ marginBottom: "1rem" }}>
            Ready to Train?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-tight" style={{ marginBottom: "1.5rem" }}>
            Put It Into Practice
          </h2>
          <p className="text-brand-muted text-sm" style={{ marginBottom: "2rem" }}>
            Your first session is on us. No commitment, no pressure.
          </p>
          <Button href="/free-trial" variant="primary" size="large">
            START YOUR FREE TRIAL
          </Button>
        </div>
      </section>
    </>
  );
}
