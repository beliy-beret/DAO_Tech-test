import React from 'react'

const FilterComponent = ({label, name, value, onChange, defaultChecked}) => {
    return (
        <label>{label}
            <input type="radio" name={name} value={value} noChange={onChange} defaultChecked={defaultChecked} />
        </label>
    )
}
export default FilterComponent;
