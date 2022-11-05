import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle/>
            Article 1
            <Rating value={3}/>
            <Accordion/>
            Article 2
            <Rating  value={0}/>
            <Rating  value={1}/>
            <Rating  value={2}/>
            <Rating  value={3}/>
            <Rating  value={4}/>
            <Rating  value={5}/>
        </div>
    );
}

function PageTitle() {
    console.log("PageTitle rendering")
    return <div>This is APP Component</div>
}

export default App;
