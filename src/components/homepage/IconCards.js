import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled'
import { transparentize, modularScale } from 'polished';
import Container from '../Container';

const IconCardsWrapper = styled.div`
  background: var(--color-bg);
  padding: 80px 0;
`;

const Cards = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: 50px -25px;
    justify-content: center;
  }
`;

const CardItem = styled.div`
  text-align: center;
  padding: 0 25px 40px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (min-width: 768px) {
    width: ${(100 / 3).toFixed(5)}%;
    padding-bottom: 0;
  }
`;

const Box = styled.div`
  background: white;
  padding: 25px 30px;
  border-radius: ${[modularScale(3), modularScale(1), modularScale(3), modularScale(3)].join(' ')};
  width: 100%;
  box-shadow: 0 0 100px ${transparentize(.9, '#2d3b4e')};
  min-height: 100%;
  
  h3 {
    line-height: 1.15;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .015em;
    font-weight: 600;
    margin: 25px 0 20px;
  }

  p {
    padding: 0;
    margin: 1rem 0 0;
    line-height: 1.5;
    color: var(--color-text-light);
  }
`;

export default function IconCards() {
  const data = useStaticQuery(graphql`
    query IconCardsQuery {
      contentfulPageHome {
        iconCards {
          id
          title
          text {
            text
          }
          icon {
            title
            file {
              url
            }
          }
        }
      }
    }
  `);
  const { iconCards } = data.contentfulPageHome;

  return (
    <IconCardsWrapper>
      <Container>
        <Cards>
          {iconCards.map(iconCard => (
            <CardItem key={iconCard.id}>
              <Box>
                <img
                  src={iconCard.icon.file.url}
                  alt={iconCard.icon.title}
                  width={80}
                  height={80}
                />
                <h3>{iconCard.title}</h3>
                <p>
                  {iconCard.text.text}
                </p>
              </Box>
            </CardItem>
          ))}
        </Cards>
      </Container>
    </IconCardsWrapper>
  )
}