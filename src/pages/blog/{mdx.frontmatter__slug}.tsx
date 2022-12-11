import { graphql, PageProps, Script } from "gatsby";
import React from "react";
import styled from "styled-components";
import TableOfContents from "../../components/ui/TOC";
import Seo from "../../components/util/seo";
import { device } from "../../styles/breakpoints";

import { Blog } from "schema-dts";
import { JsonLd } from "react-schemaorg";


const PageContainer = styled.article`
  max-width: 70%;
  padding: 1rem;
  display: grid;
  gap: 20px;
  grid-template-areas:
    "post toc";
  grid-template-rows: 3fr 1fr;
  @media only screen and (max-width: 600px) {
    display: block;
    justify-content: center;
    max-width: 100%;
  }
`;

const PostBody = styled.div`
  grid-area: post;
`;

const TocContainer = styled.div`
  grid-area: toc;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`

interface TableOfContents {
  items: [
    {
      url: string;
      title: string;
      items?: [
        {
          url: string;
          title: string;
          items?: [
            {
              url: string;
              title: string;
              items?: [
                {
                  url: string;
                  title: string;
                  items?: [
                    {
                      url: string;
                      title: string;
                      items?: [
                        {
                          url: string;
                          title: string;
                        }
                      ];
                    }
                  ];
                }
              ];
            }
          ];
        }
      ];
    }
  ];
}

const BlogPost = ({ data, children }: PageProps<Queries.PostQuery>) => {
  console.log(data.site?.siteMetadata?.siteUrl! + data.mdx?.frontmatter!.featuredImage?.childImageSharp!.fluid!.src!)
  // @ts-ignore
  const toc: TableOfContents = data.mdx?.tableOfContents!;
  return (
    <PageContainer>
      <PostBody>{children}</PostBody>
      <TocContainer>
        {toc ? (
          <TableOfContents
            slug={data.mdx!.frontmatter?.slug!}
            items={toc.items}
          />
        ) : null}
      </TocContainer>
    </PageContainer>
  );
};

export function Head({ data }: PageProps<Queries.PostQuery>) {
  return (
    // @ts-ignore
    <Seo title={data.mdx?.frontmatter?.title} description={data.mdx?.excerpt} image={data.site?.siteMetadata?.siteUrl! + data.mdx?.frontmatter!.featuredImage?.childImageSharp!.fluid!.src!}>
      <meta property="og:type" content="article" />
      <JsonLd<Blog> 
        item={{
          "@context": "https://schema.org", 
          //@ts-ignore
          "@type": "BlogPosting",
          "headline": data.mdx?.frontmatter?.title!,
          "image": data.site?.siteMetadata?.siteUrl! + data.mdx?.frontmatter!.featuredImage?.childImageSharp!.fluid!.src!,
          "editor": "Sewdohe", 
          "keywords": "dev-tooling development linux customization", 
          "url": "http://www.divnectar.com" + data.mdx?.frontmatter?.slug!,
          "datePublished": data.mdx?.frontmatter?.date!,
          "dateCreated": data.mdx?.frontmatter?.date!,
          "dateModified": data.mdx?.frontmatter?.date!,
          "description": data.mdx?.excerpt!,
          "articleBody": data.mdx?.body!,
            "author": {
              "@type": "Person",
              "name": "Sewdohe"
            }
        }}
      />
    </Seo>
  )
}

export const query = graphql`
  query Post {
    mdx {
      tableOfContents
      frontmatter {
        category
        date
        slug
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
            gatsbyImageData
          }
        }
        tags
        title
      }
      excerpt
      body
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default BlogPost;
