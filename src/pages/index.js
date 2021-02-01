import * as React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Hero from '../components/homepage/Hero';
import Layout from '../components/Layout';
import IconCards from '../components/homepage/IconCards';
import MediaBlocks from '../components/homepage/MediaBlocks';


const IndexPage = ({ data }) => {
  const { title } = data.contentfulPageHome;
  
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Hero />
      <IconCards />
      <MediaBlocks />
    </Layout>
  );
};

export const queryPageHome = graphql`
  query {
    contentfulPageHome {
      title
    }
  }
`;

export default IndexPage;
