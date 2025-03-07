import React, { useState, useRef } from 'react';

function TriviaForm({ onFetchTrivia }) {
    const [name, setName] = useState('')
    const [numQuest, setNumQuest] = useState(10);
    const [cat, setCat] = useState('');
    const [level, setLevel] = useState('');
    const [type, setType] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();
    onFetchTrivia({ numQuest, cat, level, type });
};

const handleNumQuest = (e) => {
    const value = parseInt(e.target.value, 5);
if (value >= 1 && value <= 5) {
    setNumQuest(value);
} else {
    alert('Please insert an number between 1-5');
    setNumQuest(5);
    }
};

const nameInputRef = useRef(null);

return (
    <form onSubmit={handleSubmit}>
        <h1>Let's Play Music Trivia</h1>
        
        <input 
        value={name} 
        placeholder="Insert Name" 
        onChange={(e) => setName(e.target.value)}
        ref={nameInputRef}
        />
        
        <label>
            How many questions?
            <input
                type="number"
                value={numQuest}
                onChange={handleNumQuest}
                min="1"
                max="5"/>
        </label>
        <br />

        <label>
            Category:
            <select value={cat} onChange={(e) =>setCat(e.target.value)}>
                <option value=" "> Any Category</option>
                <option value="1"> Music</option>
                <option value="2"> Musicals & Theaters</option>
                <option value="3"> Celebs</option>
                </select>
        </label>
        <br />

        <label>
            Difficulty:
            <select value={level} onChange={(e) =>setLevel(e.target.value)}>
                <option value=" "> Any Difficulty</option>
                <option value="Easy"> Easy </option>
                <option value="Medium"> Medium </option>
                <option value="Hard"> Hard </option>
                </select>
        </label>
        <br />

        <label>
            Type of question?
            <select value={type} onChange={(e) =>setType(e.target.value)}>
                <option value=" "> Any Type</option>
                <option value="multiple"> Multiple Choice </option>
                <option value="boolean"> T / F </option>
                </select>
        </label>
        <br />

    <button type='submit'>Let's Play</button>
    </form>
)
}

export default TriviaForm