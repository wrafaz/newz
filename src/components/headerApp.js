import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HeaderApp extends Component {

    constructor(){
        super();
        this.state = {
            title : "NEWZ"
        }
    };

    render(){
        return(
            <header className="headerApp">
                <div className="title">{this.state.title}</div>
            </header>
        )
    };
}

export default HeaderApp;