const Checkbox = ({ id, name, alliance }) => {
    return (
        <div>
            <input
                id={id}
                name={name}
                type="checkbox"
            />
            <label>
                {alliance}
            </label>
        </div>
    )
}

export default Checkbox;
