import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/footer';
import '../styles/layout.scss';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['marcusand', 'website', 'portfolio']} />
    <Footer/>
  </Layout>
);

export default IndexPage;
