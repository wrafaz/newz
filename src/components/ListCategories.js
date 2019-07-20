import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Category from './Category.js';

class ListCategories extends Component {

    constructor(){
        super();
        this.State = {
            title: "Categorías",
            categories: [
                { name: 'Cat Azul', color: '#5E7193'},
                { name: 'Cat Roja', color: '#BD3B3B'},
                { name: 'Cat Verde', color: '#7BA770'},
                { name: 'Cat Amarilla', color: '#FDF155'},
                { name: 'Cat Morada', color: '#A838A3'}
            ]
        }
    };

    render() {
        return (
            <div className="sideMenu">
                <div className="title subTitle">{this.State.title}</div>
                <ul style={{padding:"5px"}}>
                    {
                        this.State.categories.map(category =>
                        {
                            return <li className="CategoryItem"><Category title={category.name} color={category.color} /></li>
                        })
                    }
                </ul>
            </div>
        );
    };
}

export default ListCategories;