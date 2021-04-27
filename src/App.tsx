import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterComponent from "./components/characterComponent";

function App() {
    return (
        <div>
            <CharacterComponent description={'bart'} img ={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}/>
            <CharacterComponent description={'lisa'} img ={"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"}/>
        </div>
    );
}

export default App;
