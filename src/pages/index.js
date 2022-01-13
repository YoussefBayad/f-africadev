import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <PayPalScriptProvider
          options={{
            'client-id':
              'AcHeYBj3IcH9mZ385-e3-A8gbMyJubarSLQYRzD8zs9MboG-F4QnI1pi4B952DOzHVlLFOLSj1aCoBKC',
          }}>
          <Layout>
            <SEO />
            <Banner />
            <KeyFeature />
            <ServiceSection />
            <CoreFeature />
            <WorkFlow />
            <Package />
            <TeamSection />
            <TestimonialCard />
            <BlogSection />
            <Subscribe />
          </Layout>
        </PayPalScriptProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
