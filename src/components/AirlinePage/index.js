import React, { useState } from "react/cjs/react.development";
import Filter from "../Filter";
import CardContainer from "../CardContainer";

const AirlinePage = () => {
    const [displayedAirlines, setDisplayedAirlines] = useState({ OW: false, ST: false, SA: false });
    const [filtersActive, setFiltersActive] = useState(0);

    return (
        <>
            <Filter setDisplayedAirlines={setDisplayedAirlines} setFiltersActive={setFiltersActive} />
            <CardContainer displayedAirlines={displayedAirlines} filtersActive={filtersActive}/>
        </>
    )
};

export default AirlinePage;
