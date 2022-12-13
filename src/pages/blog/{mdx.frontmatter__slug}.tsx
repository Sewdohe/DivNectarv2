import { graphql, PageProps, Script } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import TableOfContents from "../../components/ui/TOC";
import Seo from "../../components/util/seo";
import { MdToc } from "react-icons/md";
import { devices } from "../../utils/devices";
import { Blog } from "schema-dts";
import { JsonLd } from "react-schemaorg";

interface TOCProps {
  isOpen: boolean;
}

const PageContainer = styled.article`
  @media ${devices.mobileS} {
    display: block;
    max-width: 90%;
    margin: auto auto;
  }
  @media ${devices.laptop} {
    max-width: 100%;
    padding: 1rem;
    display: grid;
    overflow: hidden;
    justify-content: flex-start;
    gap: 30px;
    grid-template-areas:
      "post toc";
  }
`;

const PostBody = styled.div`
  @media ${devices.mobileS} {
    display: block;
    justify-content: center;
    max-width: 100%;
  }
  @media ${devices.laptop} {
   grid-area: post;
   max-width: 70%;
 }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.navBG};
`

const PostDate = styled.p`
  opacity: 0.7;
  font-size: 0.8rem;
  text-align: center;
`

const TocContainer = styled.div<TOCProps>`
  transition: all 0.7s;
  z-index: 50;
  width: 100vw;
  @media ${devices.mobileS} {
    position: fixed;
    align-content: flex-start;
    height: calc(100vh - 50px);
    right: ${(props) => props.isOpen ? '100vw' : 0};
    left: ${(props) => props.isOpen ? '0' : '100vw'};
    top: 50px;
    max-height: calc(100vh - 50px);
  }
  @media ${devices.laptop} {
    
    grid-area: toc;
    position: fixed;
    left: 70vw;
    right: 30px;
    width: 30%;
    top: 50px;
    padding: 2rem;
    min-width: 30%;
    overflow-y: scroll;
  }
`

const TocButton = styled.button`
  @media ${devices.mobileS} {
    border-radius: 10%;
    background: ${(props) => props.theme.colors.purple};
    position: fixed;
    right: 20px;
    z-index: 60;
    bottom: 20px;
    border: none;
    font-size: 2.4rem;
    padding: 2px;
    border: 1px solid ${(props) => props.theme.colors.cyan};
  }
  @media ${devices.laptop} {
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
  const [tocOpen, setTocOpen] = useState(false)
  return (
    <PageContainer>
      <PostHeader>
        <h1>{data.mdx?.frontmatter?.title}</h1>
        <PostDate>{data.mdx?.frontmatter?.date}</PostDate>
      </PostHeader>
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
