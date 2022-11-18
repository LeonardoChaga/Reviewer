import React from 'react';
import './MovieTendencyComponent.css';

function MovieTendencyComponent() {
    return (
        <div className="tendencyItem" /*onClick={() => console.log("Clicou")}*/>
            <div className="movieContainer">
                <img 
                    src="https://s.aficionados.com.br/imagens/img-20210629-201036_cke.jpg" 
                    className="image"
                    alt=""
                />
                <h2 className="movieTitle">Bad Fallen melhor IGL</h2>
            </div>
            <p className="movieDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lectus a augue fringilla gravida. Aliquam erat volutpat. Donec imperdiet tellus mauris.
                In porta tempus ante ut vehicula. Nullam nec lorem mauris. Praesent sed gravida libero. Morbi id mollis dolor.
                Nunc condimentum accumsan sem, rutrum hendrerit turpis dapibus sodales.
            </p>
        </div>
    );
}

export default MovieTendencyComponent;
