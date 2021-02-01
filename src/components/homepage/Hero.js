import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled'
import { modularScale } from 'polished';
import Container from '../Container';
import Button from '../Button';

const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 0 100px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeroContent = styled.div`
  order: 2;
  text-align: center;
  margin: 35px 0 0;

  @media (min-width: 768px) {
    padding-right: 50px;
    margin: 0;
    width: calc(50% + 50px);
    order: initial;
    text-align: left;
  }
`;

const HeroImage = styled(Img)`
  width: 100%;
  max-width: 500px;
  border-radius: ${[modularScale(.5), modularScale(3.5), modularScale(3.5), modularScale(3.5)].join(' ')};

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const HeroTitle = styled.h1`
  font-size: ${modularScale(4)};
  line-height: 1.15;
  margin: 0;
  font-weight: 800;
  margin: 15px 0 25px;
`;

const HeroText = styled.p`
  margin: 15px 0 25px;
  line-height: 1.5;
  font-size: 20px;
`;

const HeroButton = styled(Button)`
  padding: 18px 38px;
`;

export default function Hero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      contentfulPageHome {
        hero {
          title
          image {
            title
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          text {
            text
          }
          buttonText
          buttonPage {
            slug
          }
        }
      }
    }
  `);
  const { hero } = data.contentfulPageHome;

  return (
    <Container>
      <Header>
        <HeroContent>
          <HeroTitle>
            {hero.title}
          </HeroTitle>
          {hero.text && (
            <HeroText>
              {hero.text.text}
            </HeroText>
          )}
          {hero.buttonPage && hero.buttonPage.slug && (
            <HeroButton to={hero.buttonPage.slug}>
              {hero.buttonText}
            </HeroButton>
          )}
        </HeroContent>
        <HeroImage 
          fluid={hero.image.fluid} 
          alt={hero.image.title}
        />
      </Header>
    </Container>
  );
};