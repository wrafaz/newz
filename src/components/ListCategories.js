import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Category from './Category.js';

class ListCategories extends Component {

    constructor(){
        super();
        this.State = {
            title: "Categorías",
            categories: [
                { name: 'General', color: '#0000FF'}
            ]
        }
    };

    render() {
        return (
            <div className="sideMenu">
                <div className="title subTitle">{this.State.title}</div>
                <ul>
                    <li><Category title="General" color="#0000FF" /></li>
                    <li><Category title="Cat Roja" color="#FF0000" /></li>
                    <li><Category title="Cat Verde" color="#00FF00" /></li>
                    <li><Category title="Cat Blanca" color="#FFFFFF" /></li>
                </ul>
            </div>
        );
    };
}

export default ListCategories;