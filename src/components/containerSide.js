import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderSide from './headerSide.js';
import ListCategories  from './ListCategories.js';
import FooterSide from './footerSide.js';

class ContainerSide extends Component {

    render() {
        return(
            <div className="containerSide">
                <HeaderSide title="NewZ"/>
                <ListCategories />
                <FooterSide />
            </div>
        );
    };
}

export default ContainerSide;
