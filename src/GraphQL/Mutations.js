import { gql, useMutation } from "@apollo/client";

export const ADD_COMMENT = gql`
mutation {
    commentCreate(
        input: {
            title: "this is my title",
            link: "link.com",
            description: "this is my description",
            userComment: "this is my comment",
            rating: true,
            category: "Blindness",
            userId: #{@user_1.id}
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
        error {
            message
        }
    }
}`

