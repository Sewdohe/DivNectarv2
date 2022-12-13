import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DivNectar`,
    name: 'Div Nectar',
    siteUrl: `https://divnectar.com`,
    image: '/images/nectar-open-graph-image-2022.jpg',
    twitterUsername: '@Sewdohe',
    description: "Dev-Tooling, but on a pillowy cloud ☁️. Learn to streamline your development process and customize your linux machine!",
    keywords: [
      'React',
      'Gatsby',
      'JavaScript',
      'TypeScript',
      'Flow',
      'Styled Components',
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        resolveSiteUrl: () => 'https://divnectar.com',
      }
    },
    // `gatsby-plugin-open-graph-images`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          'gatsby-remark-autolink-headers',
        ],
        mdxOptions: {
          remarkPlugins: [
          ],
          rehypePlugins: [
            require('rehype-slug')],
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.divnectar.com`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-2MRGGEC7MM", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};

export default config;
