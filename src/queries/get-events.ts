import { gql } from "@apollo/client";

export const eventQuery = gql`
  query Events {
    events {
      id
      slug
      stage
      name
      date
      time
      description
      rsvplink
      publishedAt
      createdAt
      image {
        url
      }
    }
  }
`;
