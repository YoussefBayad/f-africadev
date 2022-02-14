import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Services from '../sections/services';
import About from '../sections/about';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <Banner />
          <KeyFeature />
          <Services />
          <ServiceSection />
          <About />
          <TestimonialCard />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
