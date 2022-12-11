import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Card from "../components/ui/ArticleCard";

const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  flex-wrap: wrap;
`;

const Blog = ({ data }: PageProps<Queries.AllPostsQuery>) => {
  const allPosts = data.allMdx.nodes;
  return (
    <PostsContainer>
      {allPosts.map((post) => {
        const image = getImage(
          post.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData!
        );
        return (
          <Card
            key={post.id}
            slug={post.frontmatter?.slug!}
            image={image!}
            title={post.frontmatter!.title!}
          />
        );
      })}
    </PostsContainer>
  );
};

export const query = graphql`
  query AllPosts {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          tags
          date
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500, quality: 100)
            }
          }
        }
      }
    }
  }
`;

export default Blog;
