import {gql} from '@apollo/client'

export const LOAD_COMMENTS = gql`
query comments {
    allCategoryComments(
        categoryId: 1
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
`
