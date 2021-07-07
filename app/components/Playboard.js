import React from "react";

const initialState = {
    arrMap: Array(9).fill(null),
    lastPlayerCross: true,
    winner: ""
};

export class PlayBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    handleClick(index) {
        let currentPlayer = this.state.lastPlayerCross? "X" : "O";
        let history = this.state.arrMap;
        if(history[index]) return;
        history[index] = currentPlayer;
        let winner = calculateWinner(history);

        if(this.state.winner) {
            return;
        }

        this.setState({
            arrMap: history,
            lastPlayerCross: !this.state.lastPlayerCross,
            winner
        });
    }

    handleReset() {
        this.setState(initialState);
    }

    render() {
        const {arrMap, lastPlayerCross, winner} = this.state;

        const status = winner ? `Winner is ${winner}` : `Current Player is ${lastPlayerCross ? `X` : `O`}`;

        return(
            <div className="holder">
                <div className="header">
                    <div className="status">{status}</div>
                    <button className="reset-game" onClick={() => this.handleReset()}>New Game!!</button>
                </div>
                <div className="play-box-holder">
                    {
                        arrMap.map((box, index) => {
                            return (
                                <div 
                                    id={`box-${index}`}
                                    className="box"
                                    key={index}
                                    onClick={() => this.handleClick(index)}>
                                    {box}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

function calculateWinner(arr) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i=0; i<winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return arr[a];
        }
    }

    return null;
}