// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const oembed = require('@agentofuser/remark-oembed');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modul 431',
  tagline: 'Aufträge im IT-Umfeld selbstständig durchführen',
  url: 'https://gaebi4102.github.io',
  baseUrl: '/bbzbl-modul-431/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  markdown: {
    mermaid: true,
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gaebi4102', // Usually your GitHub org/user name.
  projectName: 'bbzbl-modul-431', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["de"],
        indexBlog: false,
        indexPages: true
      },
    ],
    require.resolve("@docusaurus/theme-mermaid"),
  ],

  plugins: [
    ["devserver-config",
      {
        proxy: {
          "/bbzbl-modul-431/slides": {
            target: "http://localhost:3003",
            pathRewrite: function(/** @type {string} */ path, /** @type {any} */ _req) {
              return path.replace("/bbzbl-modul-431/slides", '') + ".md";
            }
          }
        }
      }
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gaebi4102/bbzbl-modul-431/tree/main/',
          remarkPlugins: [oembed],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      navbar: {
        title: 'Modul 431',
        logo: {
          alt: 'BBZBL Logo',
          src: 'img/bbzbl-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Unterlagen',
          },
          { to: '/slides/', label: 'Präsentationen', position: 'left' },
          {
            href: 'https://github.com/gaebi4102/bbzbl-modul-431',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Made with ❤️ in Pratteln`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};
module.exports = config;

