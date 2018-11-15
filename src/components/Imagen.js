import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

    return (
        <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>

                    <a href={largeImageURL} className="btn btn-primary btn-block" target="_blank">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}
 
export default Imagen;