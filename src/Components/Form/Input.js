import React from 'react'

function Input(props) {
    return (
        <input onChange={props.inputChangeEvent} className='form-control' type={props.inputType} value={props.inputValue} id={props.inputId} />
        )
}

export default Input