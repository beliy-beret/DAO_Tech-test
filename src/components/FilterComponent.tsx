import React from 'react'

type PropsType = {
  label: string
  name: string
  value: any
  onchange: () => void
  defaultChecked: boolean
}

const FilterComponent: React.FC<PropsType> = ({
  label, name, value, onchange, defaultChecked,
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input id={name} type="radio" name={name} value={value} onChange={onchange} defaultChecked={defaultChecked} />
  </div>
)
export default FilterComponent
