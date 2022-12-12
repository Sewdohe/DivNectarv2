import { graphql, PageProps, Script } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import TableOfContents from "../../components/ui/TOC";
import Seo from "../../components/util/seo";
import { MdToc } from "react-icons/md";

import { Blog } from "schema-dts";
import { JsonLd } from "react-schemaorg";

interface TOCProps {
  opened: boolean;
}

const PageContainer = styled.article`
  max-width: 100%;
  padding: 1rem;
  display: grid;
  overflow: hidden;
  justify-content: flex-start;
  gap: 20px;
  grid-template-areas:
    "post toc";
  @media only screen and (max-width: 1200px) {
    display: block;
    justify-content: center;
    max-width: 100%;
  }
`;

const PostBody = styled.div`
  grid-area: post;
  max-width: 70%;
  @media only screen and (max-width: 1200px) {
    display: block;
    justify-content: center;
    max-width: 100%;
  }
`;

const TocContainer = styled.div`
  grid-area: toc;
  transition: all 0.7s;
  position: fixed;
  right: 30px;
  max-width: 30%;
  overflow-x: hidden;
  @media only screen and (max-width: 1200px) {
    /* display: none; */
    position: fixed;
    height: calc(100vh - 50px);
    min-width: 100vw;
    right: ${(props) => !props.isOpen ? '100vw' : 0};
    left: ${(props) => !props.isOpen ? '0' : '100vw'};
    top: 50px;
  }
`

const TocButton = styled.button`
  border-radius: 10%;
  background: ${(props) => props.theme.colors.purple};
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: none;
  font-size: 2.4rem;
  padding: 2px;
  border: 1px solid ${(props) => props.theme.colors.cyan}
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
  const [tocOpen, setTocOpen] = useState(false)
  return (
    <PageContainer>
      <PostBody>{children}</PostBody>
      {/* @ts-ignore */}
      <TocContainer isOpen={tocOpen}>
        {toc ? (
          <TableOfContents
            slug={data.mdx!.frontmatter?.slug!}
            items={toc.items}
          />
        ) : null}
      </TocContainer>
      <TocButton onClick={() => setTocOpen(!tocOpen) }><MdToc /></TocButton>
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
