import React from 'react'

function WinLose({ scoreResult }) {
    if (!scoreResult) {
        return null
    }

    const calcPercentage = () => {
        if (scoreResult.totalQuestions === 0) {
            return 0;
        }
        return (scoreResult.score / scoreResult.totalQuestions) * 100;
    };
    
    const percentage = calcPercentage();

    return (
        <>
            <div>
                <h3>Score: {scoreResult.score}/{scoreResult.totalQuestions} ({percentage.toFixed(2)}%)</h3>
                <h3>Result: {scoreResult.result}</h3>
            </div>
        </>
    )
}

export default WinLose