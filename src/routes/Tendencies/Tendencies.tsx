import React, { useState, useEffect } from 'react';

import './Tendencies.css';
import {getTendenciesList} from './TendenciesList';

import TitleComponent from '../components/TitleComponent/TitleComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import TendenciesRow from './TendenciesRow';

interface tendencie {
    slug: string;
    title: string;
    items: any;
}



function Tendencies()  {
    const [tendenciesList, setTendenciesList] = useState<tendencie[]>([]);

    useEffect(()=> {
        const loadAll = async () => {
            let list = await getTendenciesList();
            
            setTendenciesList(list);        
        }
        loadAll();
    }, []);
    
    return (
        <div className="background">
            <HeaderComponent />
            <TitleComponent title="Tendência"/>

            <section className="lists">
              {tendenciesList.map((item, key) =>( 
               <TendenciesRow key={key} title={item.title} items={item.items} />
              ))}
            </section>

        </div>
    );
}

export default Tendencies;
