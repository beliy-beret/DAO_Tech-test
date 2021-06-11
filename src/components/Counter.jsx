import React from 'react'

const Counter = ({value, label}) => {
    return (
        <label>{label}<input value={value} type="number" readOnly /></label>
    )
}
export default Counter
