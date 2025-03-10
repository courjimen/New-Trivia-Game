import React from 'react'
import he from 'he'

function Results({ triviaData, userAnswers }) {
  if (!triviaData || !triviaData.results) {
    return null;
  }
  return (
    <>
    <div>
        <h3>Results:</h3>
        <ol>
          {triviaData.results.map((question, index) =>
            <li key={index}>
              <p>Question: {he.decode(question.question)}</p>
              {userAnswers[index] && (
                <p>
                  {userAnswers[index] === question.correct_answer
                    ? 'Correct!' : `Incorrect. Correct answer: ${he.decode(question.correct_answer)}`}
                </p>
              )}
            </li>
          )}
        </ol>
      </div>
    </>
    )
  }

export default Results