import React from 'react'
import he from 'he'
import WinLose from './WinLose';

function Results({ triviaData, userAnswers, scoreResult }) {
  if (!triviaData || !triviaData.results) {
    return null;
  }
  return (
    <>
    <div>
        <h3>Correct Answers:</h3>
        <ol>
          {triviaData.results.map((question, index) =>
            <li key={index}>
              <p>Question: {he.decode(question.question)}</p>
              {userAnswers[index] && (
                <p
                style={{
                    color: 
                    userAnswers[index] === question.correct_answer ? 'green' : 'red'
                }}
                >
                  {userAnswers[index] === question.correct_answer ? 'Correct!' : `Incorrect. Correct answer: ${he.decode(question.correct_answer)}`}
                </p>
              )}
            </li>
          )}
        </ol>
      <h3>Your Score:</h3>
      <WinLose scoreResult={scoreResult} />
      </div>
    </>
    )
  }

export default Results