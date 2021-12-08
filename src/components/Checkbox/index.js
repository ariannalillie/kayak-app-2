const Checkbox = ({ id, name, alliance, setDisplayedAirlines, setFiltersActive }) => {
    const handleClick = (e) => {
        if (e.target.checked) {
            setFiltersActive((prev) => prev+1);

        } else {
            setFiltersActive((prev) => prev-1);
        }
        setDisplayedAirlines((prev) => {
            return {...prev, [name]: e.target.checked}
        })
    };

    return (
        <div>
            <input
                id={id}
                name={name}
                type="checkbox"
                onClick={handleClick}
            />
            <label>
                {alliance}
            </label>
        </div>
    )
}

export default Checkbox;
