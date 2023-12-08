import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { LOAD_COMMENTS } from '../../GraphQL/Queries';

function TestComments() {
    const { loading, error, data } = useQuery(LOAD_COMMENTS);
    console.log("DATA", data)

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const commentIds = data.allCategoryComments.map((comment) => {
        return (
            <p>{comment.id}</p>
        )
    })

    return (
        <div>
            <h2>Hello from TestComments</h2>
            <div>
                {commentIds}
            </div>
        </div>
    )
}

export default TestComments;