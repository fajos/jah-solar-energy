import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { getAllPostSlugs, getPostData } from "@/lib/blog";
import { notFound } from "next/navigation";

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs;
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const post = await getPostData(slug);
        return {
            title: post.title,
            description: post.excerpt,
            keywords: post.keywords || "",
            openGraph: {
                title: post.title,
                description: post.excerpt,
                images: [post.image],
            },
            alternates: {
                canonical: `/blog/${slug}`,
            },
        };
    } catch {
        return {
            title: "Post Not Found",
        };
    }
}

export default async function BlogPost({ params }) {
    const { slug } = await params;

    let post;
    try {
        post = await getPostData(slug);
    } catch {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <article>
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden text-white">
                    <div className="absolute inset-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gray-900/85"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                        <span className="bg-yellow-500/20 text-yellow-400 text-sm font-medium px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readingTime}
                            </span>
                        </div>
                    </div>
                </section>


                {/* Content */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div
                            className="
    prose prose-lg max-w-none 
    prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4
    prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
    prose-h3:text-xl prose-h3:sm:text-2xl
    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5
    prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:underline
    prose-strong:text-gray-900
    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5
    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-5
    prose-li:text-gray-700 prose-li:mb-2
    prose-table:border-collapse prose-table:w-full prose-table:mb-8
    prose-th:bg-gray-100 prose-th:text-left prose-th:px-4 prose-th:py-3 prose-th:font-semibold prose-th:text-gray-900
    prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-3 prose-td:text-gray-700
    prose-img:rounded-xl prose-img:shadow-lg
    prose-blockquote:border-l-4 prose-blockquote:border-yellow-500 prose-blockquote:bg-yellow-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-gray-700
    prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
  "
                            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                        />
                    </div>
                </section>
            </article>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Need Help With Your Solar or Electrical Project?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Our licensed engineer is ready to help. Get a free, no-obligation quote today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-lg"
                        >
                            Get Free Quote
                        </Link>
                        <a
                            href="https://wa.me/2347035362804?text=Hello%20Jah%20Solar,%20I%20have%20a%20question"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-400 transition-all shadow-lg"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}