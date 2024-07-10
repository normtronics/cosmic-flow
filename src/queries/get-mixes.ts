import { gql } from "@apollo/client";

export const mixQuery = gql`
  query mixesQuery {
    mixes {
      id
      slug
      stage
      title
      date
      description
      embed
      url
      publishedAt
      createdAt
      image {
        url
      }
    }
  }
`;
