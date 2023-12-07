import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { LOAD_COMMENTS } from '../../GraphQL/Queries';

function TestComments() {
    const { loading, error, data } = useQuery(LOAD_COMMENTS);
    console.log("DATA", data)

    return (
        <div>
            <h2>Hello from TestComments</h2>
            
        </div>
    )
}

export default TestComments;