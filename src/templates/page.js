import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import PageContent from '../components/PageContent';

export default function PageTemplate({ pageContext }) {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          baseTitle: title
        }
      }
    }
  `);
  const { baseTitle } = data.site.siteMetadata;
  
  return (
    <Layout>
      <Helmet>
        <title>{pageContext.title} | {baseTitle}</title>
      </Helmet>
      <PageContent
        title={pageContext.title}
        content={pageContext.content}
      />
    </Layout>
  );
}