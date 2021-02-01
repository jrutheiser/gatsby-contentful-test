import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'
import { transparentize } from 'polished';

const ButtonWrapper = styled(Link)`
  display: inline-block;
  apperance: none;
  text-decoration: none;
  border: none;
  background: none;
  padding: 14px 35px;
  background: var(--color-primary);
  font-weight: 600;
  letter-spacing: .013em;
  border-radius: 6px;
  text-transform: uppercase;
  color: white;
  box-shadow: 0 0 50px ${transparentize(.8, '#2d3b4e')};
  transition: all 250ms ease;
  position: relative;
  overflow: hidden;
  margin: 15px 0 0;
  cursor: pointer;

  span {
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    top: 40%;
    left: 100%;
    margin: -15px 0 0 1px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--color-text);
    transform-origin: 100% 50%;
    transform: scale3d(1, 2, 1);
    transition: transform 175ms ease-out, opacity 175ms ease-out;
    transition-timing-function: cubic-bezier(0.7,0,0.9,1);
  }

  &:hover {
    box-shadow: 0 0 30px ${transparentize(.6, '#2d3b4e')};

    &::before {
      transition: transform 250ms ease-in, opacity 250ms ease-in;
      transform: scale3d(9, 9, 1);
    }
  }
`;

export default function Button({ children, ...props }) {
  
  return (
    <ButtonWrapper {...props}>
      <span>
        {children}
      </span>
    </ButtonWrapper>
  )
};