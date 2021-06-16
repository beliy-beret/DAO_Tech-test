import React from 'react'

const FilterComponent = ({label, name, value, onchange, defaultChecked}) => {
    return (
        <label>{label}
            <input type="radio" name={name} value={value} onChange={onchange} defaultChecked={defaultChecked} />
        </label>
    )
}
export default FilterComponent;
