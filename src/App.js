import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  consultarAPI = () => {

    const apiKey = '1729117-1b6030ad5cc42d11efde44e52',
          {termino, pagina} = this.state,
          url = `https://pixabay.com/api/?key=${apiKey}&q=${termino}&lang=es&per_page=50&page=${pagina}`;

    fetch(url)
      .then( res => res.json() )
      .then( result => this.setState({imagenes: result.hits}) )
      .catch( err => console.log(err) );
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino,
      pagina: 1
    }, () => {
      this.consultarAPI();
    });
  }

  paginaAnterior = () => {
    // Leer state
    let pagina = this.state.pagina;
    // Si la página es = 1 no podemos retroceder
    if(pagina === 1) return null;
    // restar a la página actual 1
    pagina -=1;
    // actualizar el state
    this.setState({
      pagina
    });
  }
  paginaSiguiente = () => {    
    // Leer state
    let pagina = this.state.pagina;
    // Sumar a la página actual 1
    pagina +=1;
    // Actualizar el state
    this.setState({
      pagina
    });
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
