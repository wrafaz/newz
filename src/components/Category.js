import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Category extends Component {

    constructor(props)
    {
        super(props);
        this.State = {
            title : this.props.title,
            color : this.props.color
        }
    }

    render () {
        return (
            <div>
                <div style={{display: "inline-block", backgroundColor: this.State.color, width:20, height:20}}></div>    
                <div style={{display: "inline-block"}}>{this.State.title}</div>
            </div>      
        );
    };
}

export default Category;