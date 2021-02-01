import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PageContent from '../components/PageContent';

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Helmet>
      <title>{pageContext.title}</title>
    </Helmet>
    <PageContent
      title={pageContext.title}
      content={pageContext.content}
    />
  </Layout>
);

export default PageTemplate