import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled'
import { modularScale } from 'polished';
import Container from '../Container';
import Button from '../Button';

const MediaBlocksWrapper = styled.div`
  margin: 30px 0 0;

  @media (min-width: 768px) {
    margin: 100px 0 0;
  }
`;

const MediaBlock = styled.div`
  padding: 50px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const MediaImageWrapper = styled.div`
  @media (min-width: 768px) {
    width: calc(50% - 30px);
    ${props => props.order && `
      order: ${props.order};
    `};
  }
`;

const MediaImage = styled(Img)`
  max-width: 480px;
  width: 100%;
  ${props => props.alt ? (
    `border-radius: ${[modularScale(3.5), modularScale(.5), modularScale(3.5), modularScale(3.5)].join(' ')};`
  ):(
    `border-radius: ${[modularScale(.5), modularScale(3.5), modularScale(3.5), modularScale(3.5)].join(' ')};`
  )}
`;

const MediaText = styled.div`
  line-height: 1.6;
  color: var(--color-text-light);
  margin: 35px 0 0;

  @media (min-width: 768px) {
    margin: 0;
    width: calc(50% - 30px);
  }

  h2 {
    font-size: ${modularScale(2)};
    margin: 15px 0 25px;
    line-height: 1.3;
    color: var(--color-text);
  }

  ul,
  ol {
    padding-left: 1.2rem;
    margin: 15px 0 25px;
  }

  li {
    margin: 10px 0;
  }
`;

export default function MediaBlocks() {
  const data = useStaticQuery(graphql`
    query MediaBlocksQuery {
      allContentfulHomepageMediaBlock {
        edges {
          node {
            id
            title
            text {
              childMarkdownRemark {
                html
              }
            }
            buttonText
            buttonPage {
              slug
            }
            media {
              title
              fluid(maxWidth: 480) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const blocks = data.allContentfulHomepageMediaBlock.edges;

  return (
    <Container>
      <MediaBlocksWrapper>
        {blocks.map(({ node: block }, index) => (
          <MediaBlock key={block.id}>
            <MediaImageWrapper order={index % 2 !== 0 ? 2 : null}>
              <MediaImage 
                fluid={block.media.fluid}   
                alt={index % 2 !== 0}
              />
            </MediaImageWrapper>
            <MediaText>
              <h2>{block.title}</h2>
              <div 
                dangerouslySetInnerHTML={{
                  __html: block.text.childMarkdownRemark.html
                }}
              />
              {block.buttonPage && block.buttonPage.slug && (
                <Button to={block.buttonPage.slug}>
                  {block.buttonText}
                </Button>
              )}
            </MediaText>
          </MediaBlock>
        ))}
      </MediaBlocksWrapper>
    </Container>
  )
}