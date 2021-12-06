import './Filter.css'

const Filter = () => {
    return (
        <div className="FilterContainer">
            <h1 className="title">Airlines</h1>
            <h2 className="filter">Filter by Alliances</h2>
            <div className="optionsContainer">
                <input
                    id="checkbox1"
                    name="oneWorld"
                    type="checkbox"
                />
                <label>
                    Oneworld
                </label>
                <input
                    id="checkbox2"
                    name="skyTeam"
                    type="checkbox"
                />
                <label>
                    Sky Team
                </label>
                <input
                    id="checkbox3"
                    name="starAlliance"
                    type="checkbox"
                />
                <label>
                    Star Alliance
                </label>
            </div>
        </div>
    )
};

export default Filter;
