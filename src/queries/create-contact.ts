import { gql } from "@apollo/client";

export const contactMutation = gql`
  mutation (
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
    $site: String!
  ) {
    createContact(
      data: {
        name: $name
        email: $email
        subject: $subject
        message: $message
        site: $site
      }
    ) {
      id
      name
      email
      subject
      message
      site
    }
  }
`;
