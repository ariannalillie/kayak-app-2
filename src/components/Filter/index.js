import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import './Filter.css'

const Filter = () => {

    return (
        <div className="FilterContainer">
            <h1 className="title">Airlines</h1>
            <h2 className="filter">Filter by Alliances</h2>
            <div className="optionsContainer">
                <Checkbox
                    id='checkbox1'
                    name='oneworld'
                    alliance='One World'
                />
                <Checkbox
                    id='checkbox2'
                    name='skyTeam'
                    alliance='Sky Team'
                />
                <Checkbox
                    id="checkbox3"
                    name="starAlliance"
                    alliance='Star Alliance'
                />
            </div>
        </div>
    )
};

export default Filter;
