import { gql } from "@apollo/client";

export const djQuery = gql`
  query Djs {
    djs {
      id
      slug
      name
      image {
        url
      }
    }
  }
`;
