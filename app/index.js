import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import { PlayBoard } from "./components/Playboard";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <PlayBoard />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)