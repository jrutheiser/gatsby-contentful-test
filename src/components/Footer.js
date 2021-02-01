import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled'
import Container from './Container';

const NavWrapper = styled.footer`
  position: relative;
  color: var(--color-text-light);
  margin: 50px 0 0;

  @media (min-width: 768px) {
    margin: 100px 0 0;
  }
`;

const NavContent = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid var(--color-border);
  padding: 22px 30px 50px;
`;

const Logo = styled(Link)`
  font-size: 28px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  color: var(--color-text);
  padding: 8px 0;
  transition: color 225ms ease;

  &:hover {
    color: var(--color-primary);
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
  color: inherit;
  display: inline-block;
  position: relative;
  transition: color 175ms ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterNavigationQuery {
      contentfulNavigationFooter {
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
  const { title, navigationElements } = data.contentfulNavigationFooter;
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
          <Logo to={'/'}>Test Site</Logo>
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