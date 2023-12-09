import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation AddComment(
    $title: String!,
    $link: String!,
    $description: String!,
    $userComment: String!,
    $rating: Boolean!,
    $category: String!,
    $userId: Int!
  ) {
    commentCreate(
      input: {
        title: $title,
        link: $link,
        description: $description,
        userComment: $userComment,
        rating: $rating,
        category: $category,
        userId: $userId
      }
    ) {
      id
      title
      link
      description
      userComment
      rating
      categoryId
      userId
    }
  }
`;

export const SESSION_CREATE = gql`
  mutation SessionCreate($email: String!, $password: String!) {
    sessionCreate(input: {email: $email, password: $password}) {
      id
      email
      name
    }
  }
`;