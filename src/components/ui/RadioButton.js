import React, { useState } from 'react';


const underScore = (word) => {
  const r = /\s+/g
  return word.replace(r, '_').toLowerCase()
}

const getSelected = (items, index) => {
  // TODO do some check
  if (!isNaN(Number.parseInt(index, 10)) && index < items.length) {
    const i = items[index];
    return i;
    // return underScore(i)
  }
  return ""
}

const RadioButton = ({items, selectedIndex, onChange, className}) => {

  // TODO add a selected Index here
  const [selected, setSelected] = useState(getSelected(items, selectedIndex));

  const handleOnChange = (e) => {
    const choice = e.target.value;
    setSelected(choice)
    onChange && onChange(choice)
  }
  return (
    <div className={className}>
    {
      items.map((it) => {
        const v = underScore(it);
        return (
        <div key={v} className="flex items-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 mt-2 rounded">
            <input
              id={v}
              type="radio"
              value={it}
              checked={it === selected}
              onChange={handleOnChange}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label htmlFor={v} className="ml-2 block text-sm leading-5">
              {it}
            </label>
        </div>
      )})
    }
    </div>
  )
}

export default RadioButton;
