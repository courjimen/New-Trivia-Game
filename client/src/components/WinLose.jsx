import React from 'react'

function WinLose({ scoreResult }) {
    if (!scoreResult) {
        return null
    }

    return (
        <>
            <div>
                <h3>Score: {scoreResult.score}/{scoreResult.totalQuestions}</h3>
                <h3>Result: {scoreResult.result}</h3>
            </div>
        </>
    )
}

export default WinLose