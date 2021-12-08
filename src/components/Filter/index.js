import React from 'react';
import Checkbox from '../Checkbox';
import './Filter.css'

const Filter = ({ setDisplayedAirlines, setFiltersActive }) => {

    return (
        <div className="FilterContainer">
            <h1 className="title">Airlines</h1>
            <h2 className="filter">Filter by Alliances</h2>
            <div className="optionsContainer">
                <Checkbox
                    setDisplayedAirlines={setDisplayedAirlines}
                    setFiltersActive={setFiltersActive}
                    id='checkbox1'
                    name='OW'
                    alliance='One World'
                />
                <Checkbox
                    setDisplayedAirlines={setDisplayedAirlines}
                    setFiltersActive={setFiltersActive}
                    id='checkbox2'
                    name='ST'
                    alliance='Sky Team'
                />
                <Checkbox
                    setDisplayedAirlines={setDisplayedAirlines}
                    setFiltersActive={setFiltersActive}
                    id="checkbox3"
                    name="SA"
                    alliance='Star Alliance'
                />
            </div>
        </div>
    )
};

export default Filter;
