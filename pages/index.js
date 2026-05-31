import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LG Inter | 웹 플랫폼</title>
        <meta
          name="description"
          content="Next.js 기반 LG Inter 웹 플랫폼"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta property="og:image" content="/images/logo.svg" />
      </Head>

      <Layout>
        <Hero />
        <FeatureGrid />
        <Footer />
      </Layout>
    </>
  );
}
