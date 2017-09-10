import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HeaderSide extends Component {

    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            title : this.props.title
        }
    };

    render(){
        return(
            <header className="headerSide">
                <div className="title">{this.state.title}</div>
            </header>
        )
    };
}

export default HeaderSide;