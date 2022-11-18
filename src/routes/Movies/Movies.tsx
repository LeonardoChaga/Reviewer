import React, { useState, useEffect } from 'react';

import './Movies.css';
import { getHomeList } from '../getHomeList';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import MovieRow from '../components/MovieComponent/MovieRow';

interface movie {
    slug: string;
    title: string;
    items: any;
}

function Movies() {
    const [movieList, setMovieList] = useState<movie[]>([]);

    useEffect(()=> {
        const loadAll = async () => {
            let list = await getHomeList();
            
            setMovieList(list);        
        }
        loadAll();
    }, []);
    
    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Filmes"/>

            <section className="lists">
              {movieList.map((item, key) =>( 
               <MovieRow key={key} title={item.title} items={item.items} />
              ))}
            </section>

        </div>
    );
}

export default Movies;
