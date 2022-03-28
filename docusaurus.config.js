/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Avernakis',
    tagline: '',
    url: 'https://qber-soft.github.io/',
    baseUrl: '/Ave-Nodejs-Docs/',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-cn'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            'zh-cn': {
                label: '中文',
            },
        },
    },
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/Ave.svg',
    organizationName: 'qber-soft', // Usually your GitHub org/user name.
    projectName: 'ave-ui', // Usually your repo name.
    themeConfig: {
        colorMode: {
            disableSwitch: false,
        },
        prism: {
            theme: require('prism-react-renderer/themes/vsDark'),
        },
        navbar: {
            title: 'Avernakis',
            logo: {
                alt: 'Avernakis',
                src: 'img/Ave.svg',
            },
            items: [
                // {
                //   to: 'docs/',
                //   activeBasePath: 'docs',
                //   label: 'Docs',
                //   position: 'left',
                // },
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'introduction',
                    label: 'Docs',
                },
                {
                    type: 'doc',
                    position: 'left',
                    docId: 'components',
                    label: 'Components',
                },
                // {
                //   to: 'docs/components',
                //   activeBasePath: 'components',
                //   label: 'Components',
                //   position: 'left',
                // },
                // {to: 'blog', label: 'Blog', position: 'right'},
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                // Please keep GitHub link to the right for consistency.
                {
                    href: 'https://github.com/qber-soft/Ave-Nodejs',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //   title: 'Learn',
                //   items: [
                //     {
                //       label: 'Style Guide',
                //       to: 'docs/',
                //     },
                //     {
                //       label: 'Second Doc',
                //       to: 'docs/doc2',
                //     },
                //   ],
                // },
                // {
                //   title: 'Community',
                //   items: [
                //     {
                //       label: 'Stack Overflow',
                //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //     },
                //     {
                //       label: 'Twitter',
                //       href: 'https://twitter.com/docusaurus',
                //     },
                //     {
                //       label: 'Discord',
                //       href: 'https://discordapp.com/invite/docusaurus',
                //     },
                //   ],
                // },
                // {
                //   title: 'More',
                //   items: [
                //     {
                //       label: 'Blog',
                //       to: 'blog',
                //     },
                //     {
                //       label: 'GitHub',
                //       href: 'https://github.com/facebook/docusaurus',
                //     },
                //   ],
                // },
                // {
                //   title: 'Legal',
                //   // Please do not remove the privacy and terms, it's a legal requirement.
                //   items: [
                //     {
                //       label: 'Privacy',
                //       href: 'https://opensource.facebook.com/legal/privacy/',
                //     },
                //     {
                //       label: 'Terms',
                //       href: 'https://opensource.facebook.com/legal/terms/',
                //     },
                //     {
                //       label: 'Data Policy',
                //       href: 'https://opensource.facebook.com/legal/data-policy/',
                //     },
                //     {
                //       label: 'Cookie Policy',
                //       href: 'https://opensource.facebook.com/legal/cookie-policy/',
                //     },
                //   ],
                // },
            ],
            // logo: {
            //   alt: 'Facebook Open Source Logo',
            //   src: 'img/oss_logo.png',
            //   href: 'https://opensource.facebook.com',
            // },
            // Please do not remove the credits, help to publicize Docusaurus :)
            copyright: `Copyright © ${new Date().getFullYear()} Avernakis`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/', // Serve the docs at the site's root
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
                },
                blog: false,
                // {
                // showReadingTime: true,
                // Please change this to your repo.
                // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                gtag: {
                    trackingID: 'UA-224050514-1',
                    anonymizeIP: true,
                },
            },
        ],
    ],
};
