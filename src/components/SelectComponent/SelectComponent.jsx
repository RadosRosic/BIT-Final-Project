import React from 'react'
import "./SelectComponent.scss"

const SelectComponent = ({text, array, selectedItem, setSelectedItem}) => {


    return (
        <>
            <label>{text}:
            <select 
            name = {text} 
            required
            value = {selectedItem}
            onChange = {(event) => setSelectedItem(event.target.value)}
            > 
            {array.map((el, i) =>  {
                return <option
                 value = {el}
                 >{el}</option>
            })}
            </select>
            </label>

        </>
    )
 }

export default SelectComponent
