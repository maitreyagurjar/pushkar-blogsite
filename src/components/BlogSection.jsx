import React from "react";
import BlogCard from './BlogCard';

export default function BlogSection() {
        return(
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl text-center font-bold mb-8 text-astongreen-100">My Latest Blog Posts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <BlogCard />
                            <BlogCard />
                            <BlogCard />
                        </div>
                    </div>
                </section>
            
        )
}