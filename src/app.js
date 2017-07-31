import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import HeaderApp from './components/headerApp.js';

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
                <div className="sideContainer">
                    <header className="headerSide">Header Menu</header>
                    <div className="sideMenu">
                        <ul>
                            <li>Opcion 1</li>
                            <li>Opcion 2</li>
                            <li>Opcion 3</li>
                            <li>Opcion 4</li>
                            <li>Opcion 5</li>
                        </ul>
                    </div>
                    <footer className="footerSide">Footer Side</footer>
                </div>
                <div className="mainContainer">
                    <HeaderApp />
                    <div className="mainContent">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </div>
                    <footer className="footerApp">Footer</footer>
                </div>
            </div>
        )
    };
}

ReactDOM.render(<App />, document.getElementById('app'));