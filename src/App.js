import React, { Component } from 'react';
import Buscador from './components/Buscador';

class App extends Component {

  state = {
    termino: '',
    imagenes: []
  }

  consultarAPI = () => {

    const apiKey = '1729117-1b6030ad5cc42d11efde44e52',
          {termino} = this.state,
          url = `https://pixabay.com/api/?key=${apiKey}&q=${termino}&lang=es`;

    fetch(url)
      .then( res => res.json() )
      .then( result => this.setState({imagenes: result.hits}) )
      .catch( err => console.log(err) );
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarAPI();
    });
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        
      </div>
    );
  }
}

export default App;
