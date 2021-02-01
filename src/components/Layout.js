import React from 'react';
import { Global, css } from '@emotion/react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          :root {
            --color-bg: #f5fcfd;
            --color-text-light: #515665;
            --color-text: #191a20;
            --color-border: #e4eaec;
            --color-nav: #2d3b4e;
            --color-links: #207792;
            --color-primary: #3aa0bd;
            --color-accent: #ce6437;
          }

          body {
            font-family: 'Open Sans', arial, sans-serif;
            padding: 0;
            margin: 0;
            color: var(--color-text);
          }
          
          img {
            max-width: 100%;
            height: auto;
          }

          html {
            box-sizing: border-box;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }
        `}
      />
      <Nav />
      {children}
      <Footer />
    </>
  );
};