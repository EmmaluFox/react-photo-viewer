import React, {useState} from 'react';
import './App.css';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {PhotoSelector} from "./PhotoSelector/PhotoSelector";
import {ImageUrls} from "./data";

function App() {
    const [selectedUrl, setSelectedUrl] = useState(ImageUrls[0]);
    
    return (
        <div className="App">
            <h1>React Photo Viewer</h1>
            <PhotoViewer src={selectedUrl}/>
            <PhotoSelector selectedUrl={selectedUrl} setSelectedUrl={setSelectedUrl}/>
        </div>
    );
}

export default App;
