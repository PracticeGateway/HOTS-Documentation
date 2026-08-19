// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
//v1.0
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Practice Gateway HOTS',
  tagline: 'Support guides for Practice Gateway',
  favicon: 'img/PG_Logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'http://localhost:3000',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    //Left
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hots',
        path: 'hots',
        routeBasePath: 'hots',
        sidebarPath: './sidebars-hots.js',
      },
    ]/*,
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'user-guides',
        path: 'user-guides',
        routeBasePath: 'user-guides',
        sidebarPath: './sidebars-user-guides.js',
      },
    ],*/
    
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Practice Gateway HOTS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/PG_Logo.png',
        },
        items: [
          {
            to: '/hots/intro',
            label: 'HOTS',
            position: 'left',
            activeBaseRegex: `/hots/`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'HOTS',
                to: '/hots/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Practice Gateway',
                href: 'https://www.practicegateway.com/',
              },
              {
                label: 'T-Tech',
                href: 'https://www.ttech.uk.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © T-TECH ${new Date().getFullYear()}. All rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;