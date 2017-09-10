import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ContainerSide from './components/containerSide.js';
import MainContainer from './components/mainContainer.js';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ContainerSide />
                <MainContainer />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('app'));