import React from 'react';

type PropsType = {
  value: number
  label: string
}

const Counter: React.FC<PropsType> = ({ value, label }) => (
  <div>
    <label htmlFor="counter">{label}</label>
    <input id="counter" value={value} type="number" readOnly />
  </div>
);
export default Counter;
