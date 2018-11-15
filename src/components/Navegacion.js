import React from 'react';

const Navegacion = (props) => {

    if(props.totalPaginas === 1) return null;

    return ( 
        <div className="py-5">
            <button onClick={props.paginaAnterior} className="btn btn-info mr-1">&larr; Anterior </button>
            <button onClick={props.paginaSiguiente} className="btn btn-info ">Siguiente &rarr;</button>
        </div>
    );
}
 
export default Navegacion;