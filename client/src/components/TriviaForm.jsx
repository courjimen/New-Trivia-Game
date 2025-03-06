import React, { useState } from 'react';

function TriviaForm({ onFetchTrivia }) {
    const [numQuest, setNumQuest] = useState(10);
    const [cat, setCat] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState('');


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
            Category:
            <select value={cat} onChange={(e) =>setCat(e.target.value)}>
                <option value=" "> Any Category</option>
                <option value="1"> Music</option>
                <option value="2"> Musicals & Theaters</option>
                <option value="3"> Celebs</option>
                </select>
        </label>

        <label>
            Difficulty:
            <select value={level} onChange={(e) =>setLevel(e.target.value)}>
                <option value=" "> Any Difficulty</option>
                <option value="1"> Easy </option>
                <option value="2"> Medium </option>
                <option value="3"> Hard </option>
                </select>
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
}

export default TriviaForm