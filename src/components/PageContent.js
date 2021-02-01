import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from '@emotion/styled'
import { modularScale } from 'polished';
import Container from './Container';

const PageTitle = styled.h1`
  font-size: ${modularScale(3)};
  max-width: 800px;
  margin: 0 auto 35px;
`;

const PageText = styled.div`
  line-height: 1.72;
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  color: var(--color-text-light);

  p {
    margin: 15px 0 30px;
  }

  a {
    color: var(--color-primary);
    font-weight: 600;
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: all 275ms ease;
    padding: 0 2px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 20%;
      background: transparent;
      z-index: -1;
      opacity: .1;
      transition: all 175ms ease;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--color-border);
      transition: background 175ms ease;
    }

    &:hover {
      color: var(--color-links);

      &::after {
        background: var(--color-text-light);
      }

      &::before {
        background: var(--color-primary);
        height: 100%;
      }
    }
  }
`;

export default function PageContent({ title, content }) {

  return (
    <Container>
      <PageTitle>
        {title}
      </PageTitle>
      <PageText>
        {renderRichText(content)}
      </PageText>
    </Container>
  );
};