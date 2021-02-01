import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import Container from './Container';

const NavWrapper = styled.nav`
  padding: 22px 0;
  position: relative;
  margin: 0 0 45px;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled(Link)`
  font-size: 22px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  color: var(--color-bg);
  background: var(--color-text);
  padding: 14px 26px;
  transition: background 175ms ease;
  border-radius: 5px 14px 14px;

  span {
    color: var(--color-primary);
    transition: color 175ms ease;
  }

  &:hover {
    background: var(--color-primary);
    color: var(--color-text);

    span {
      color: white;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 -15px;
  padding: 0;
  align-items: center;
`;

const MenuItem = styled.li`
  padding: 0 15px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .015em;
  display: inline-block;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background: var(--color-primary);
    transition: width 125ms ease-out;
    border-radius: 2px;
    opacity: .3;
  }

  &:hover::before {
    width: 35px;
    opacity: 1;
    transition: width 200ms ease-in, opacity 200ms ease-in 150ms;
  }
`;

export default function Nav() {
  const data = useStaticQuery(graphql`
    query MainNavigationQuery {
      contentfulNavigationMain {
        title
        navigationElements {
          id
          title
          link
          page {
            slug
          }
        }
      }
    }
  `);
  const { title, navigationElements } = data.contentfulNavigationMain;
  const getLinkUrl = (navigationElement) => {
    const { link, page } = navigationElement;
    if (link) {
      return link;
    }
    return `/${page.slug}`;
  };

  return (
    <NavWrapper>
      <Container size="large">
        <NavContent>
          <Logo to={'/'}><span>Test</span> Site</Logo>
          <Menu aria-label={title}>
            {navigationElements && navigationElements.map((navigationElement) => (
              <MenuItem key={navigationElement.id}>
                <MenuLink to={getLinkUrl(navigationElement)}>
                  {navigationElement.title}
                </MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </NavContent>
      </Container>
    </NavWrapper>
  )
}