import React, { useState } from 'react';
import he from 'he';
import Results from './components/Results';
import TriviaForm from './components/TriviaForm';
import './App.css';
import WinLose from './components/WinLose';

function App() {
  const [triviaData, setTriviaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
  const [incorrectAnswersCount, setinCorrectAnswersCount] = useState(0)

  const handleAnswer = (questionIndex, answer, correctAnswer) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: answer,
    })

    if (answer === correctAnswer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    } else {
      setinCorrectAnswersCount(incorrectAnswersCount + 1)
    }
  }
  const fetchTrivia = async (selections) => {
    setLoading(true);
    setError(null);

    let url = 'https://opentdb.com/api.php?'; // Endpoint on your server

    if (selections.numQuestions) {
      url += `amount=${selections.numQuestions}`;
    } else {
      url += `amount=5`; //Default amount
    }

    if (selections.category) {
      url += `&category=${parseInt(selections.category)}`;
    }

    if (selections.difficulty && selections.difficulty !== ' ') {
      url += `&difficulty=${selections.difficulty.toLowerCase()}`;
    }

    if (selections.type && selections.type !== ' ') {
      url += `&type=${selections.type}`;
    }

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTriviaData(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching trivia:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <main>
          <TriviaForm onFetchTrivia={fetchTrivia} />

          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

          {triviaData && triviaData.results && (
            <div>
              <h3>Trivia Questions:</h3>
              <ol>
                {triviaData.results.map((question, index) => {
                  const answers = [...question.incorrect_answers, question.correct_answer];
                  answers.sort(() => Math.random() - 0.5)

                  return (
                    <li key={index}>
                      <p>Question: {he.decode(question.question)}</p>
                      <div>
                        {answers.map((answer, answerIndex) => (
                          < button
                            key={answerIndex}
                            onClick={() => handleAnswer(index, answer, question.correct_answer)}
                            style={{
                              backgroundColor: userAnswers[index] === answer ? 'lightblue' : 'white',
                            }}
                          >
                            {he.decode(answer)}
                          </button>
                        ))}
                      </div>
                    </li>
                  )
                })}
              </ol>

            </div>
          )}
        </main >
      </div >

      <Results triviaData={triviaData} userAnswers={userAnswers} correctAnswersCount={correctAnswersCount} incorrectAnswersCount={incorrectAnswersCount} />
    </>
  );
}

export default App;