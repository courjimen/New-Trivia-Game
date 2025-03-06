import React, { useState } from 'react';

function TriviaForm({ onFetchTrivia }) {
    const [numQuest, setNumQuest] = useState(10);
    const [cat, setCat] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState('');
}

const handleSubmit = (event) => {
    event.preventDefault();
    onFetchTrivia({ numQuest, cat, level, type });
};

return (
    <form>
        <h1>Let's Play Music Trivia</h1>

        <label>
            How many questions?
            <input
                type="number"
                value={numQuest}
                onChange={(e) => setNumQuest(e.target.value)} />
        </label>

        <label>
            How many questions?
            <input
                type="number"
                value={numQuest}
                onChange={(e) => setNumQuest(e.target.value)} />
        </label>

        <label>
            How many questions?
            <input
                type="number"
                value={numQuest}
                onChange={(e) => setNumQuest(e.target.value)} />
        </label>

        <label>
            How many questions?
            <input
                type="number"
                value={numQuest}
                onChange={(e) => setNumQuest(e.target.value)} />
        </label>


    </form>
)

export default TriviaForm