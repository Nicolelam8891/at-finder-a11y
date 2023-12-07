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

//maybe have a new query here for LOAD_CATEGORIES? Talk to Jack and Eliza about this