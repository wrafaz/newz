import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            mensajeTitulo : "NEWZ for all",
            subTitulo : "Intentándolo mediante state"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.mensajeTitulo}</h1>
                <h2>{this.state.subTitulo}</h2>
            </div>
        )
    };
}

var app = document.getElementById('app');
ReactDOM.render(<App />, app);