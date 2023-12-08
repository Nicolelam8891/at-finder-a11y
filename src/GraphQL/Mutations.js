import { gql, useMutation } from "@apollo/client";

export const ADD_COMMENT = gql`
    mutation AddComment ($text: String!) {
    addComment (text: $text) {
        success
        comment {
            id
            text
            completed
        }
        error {
            message
        }
    }
}`