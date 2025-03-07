import React, { useState } from 'react';
import TriviaForm from './components/TriviaForm'; // Adjust path as needed
import './App.css'; // Optional: You can have global styles

function App() {
  const [triviaData, setTriviaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrivia = async (selections) => {
    setLoading(true);
    setError(null);

    let url = '/trivia?'; // Endpoint on your server

    if (selections.numQuestions) {
      url += `amount=${selections.numQuestions}`;
    } else {
      url += `amount=10`; //Default amount
    }

    if (selections.category) {
      url += `&category=${selections.category}`;
    }

    if (selections.difficulty) {
      url += `&difficulty=${selections.difficulty}`;
    }

    if (selections.type) {
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
    <div className="App">
      <main>
        <TriviaForm onFetchTrivia={fetchTrivia} />

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {triviaData && (
          <div>
            <h3>Trivia Questions:</h3>
            <pre>{JSON.stringify(triviaData, null, 2)}</pre>
            {/* Render trivia questions here, mapping over triviaData */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;