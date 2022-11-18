import React from 'react';
import './TitleComponent.css';

function TitleComponent(props: { title: string }) {
    return (
        <div>
            <header className="titleContainer">
                <h1 className="title">{ props.title }</h1>
            </header>
        </div>
    );
}

export default TitleComponent;
