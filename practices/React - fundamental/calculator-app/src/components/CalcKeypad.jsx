import React from 'react'
import CalcScreen from './CalcScreen'
import { useState } from 'react'

const CalcKeypad = () => {

  const [calc, setCalc] = useState("")

  const handleAddNum = (event) => {
    setCalc(event.target.value);
    // console.log(calc)
    // console.log(event.target.innerHTML)
  }
  
  const handleAddNumClick = () => {
    handleAddNum(calc)
    console.log(calc)
  }
    //this function calls the function "handleInputChange" which creates a new "newTodo" to the end of the "initialTasks" array.
    //the "inputValue" state - holds the inserted input value, in other words, any change of the inner value of the input, will be contained by "inputValue"


  return (
    <div>
      <CalcScreen />
      <div className='calculator-keypad'>
        <button className='big-button'>AC</button>
        <button className='button'>DEL</button>
        <button className='button'>/</button>
        <button className='button' onClick={handleAddNumClick}>1</button>
        <button className='button'>2</button>
        <button className='button'>3</button>
        <button className='button'>*</button>
        <button className='button'>4</button>
        <button className='button'>5</button>
        <button className='button'>6</button>
        <button className='button'>+</button>
        <button className='button'>7</button>
        <button className='button'>8</button>
        <button className='button'>9</button>
        <button className='button'>-</button>
        <button className='button'>.</button>      
        <button className='button'>0</button>
        <button className='big-button'>=</button>
      </div>
    </div>
  )
}

export default CalcKeypad