import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderContent from './headerContent.js';
import MainContent from './mainContent.js';
import FooterContent from './footerContent.js';

class MainContainer extends Component {

    render () {
        return (
            <div className="mainContainer">
                <HeaderContent />
                <MainContent />
                <FooterContent />
            </div>
        );
    };
};

export default MainContainer;