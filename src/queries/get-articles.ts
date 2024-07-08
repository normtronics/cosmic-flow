import { gql } from "@apollo/client";

export const articleQuery = gql`
  query Articles {
    articles {
      id
      seo {
        ... on Seo {
          id
          description
          keywords
          stage
          title
        }
      }
      author {
        name
      }
      slug
      stage
      title
      updatedAt
      publishedAt
      createdAt
      content {
        markdown
        raw
      }
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;
