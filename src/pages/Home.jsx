import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';

/**
 * Renders the Home page component.
 * @returns {JSX.Element} The rendered Home page component.
 */
export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <BlogSection/>
    </Layout>
  );
}