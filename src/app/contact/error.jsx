'use client'

import { useEffect } from "react"

function Error({ error, reset }) {
    useEffect(() => {
        // log the error to an error reporting service
        console.log(error);
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                // Attempt to recover by trying to re-render the segment
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}