import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Hero from '../components/homepage/Hero';
import Layout from '../components/Layout';
import IconCards from '../components/homepage/IconCards';
import MediaBlocks from '../components/homepage/MediaBlocks';


const IndexPage = ({ data }) => {
  const { title } = data.contentfulPageHome;
  const { baseTitle } = data.site.siteMetadata;
  
  return (
    <Layout>
      <Helmet>
        <title>{title} | {baseTitle}</title>
      </Helmet>
      <Hero />
      <IconCards />
      <MediaBlocks />
    </Layout>
  );
};

export const queryPageHome = graphql`
  query {
    site {
      siteMetadata {
        baseTitle: title
      }
    }
    contentfulPageHome {
      title
    }
  }
`;

export default IndexPage;
