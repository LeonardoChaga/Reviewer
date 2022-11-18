import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './MovieRow.css';

function MovieRow(props: { title: string, items: any }) {
    const [scrollX, setScrollX] = useState(-400);

    const history = useHistory();

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = props.items.results.length * 150;
        if((window.innerWidth - listW) > x) {
            x =(window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{props.title}</h2>
           
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
           
            
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,    
                    width: props.items.results.length * 150
                }}>
                    {props.items.results.length > 0 && props.items.results.map((item: any, key: number) =>(
                        <div key={key} className="movieRow--item" onClick={() => history.push(`/review:${item.id}`)}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default MovieRow;
