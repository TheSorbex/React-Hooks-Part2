import React, { useReducer, useState } from 'react'
const initState = {
  count: 0,
  array: []
}
function reducer (state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'ADD': return { ...state, count: state.count + 1 }
    case 'SUB': return { ...state, count: state.count - 1 }
    case 'MERGE': return { ...state, array: [...state.array, action.payload] }
    default: return state
  }
}
function CounterReducer () {
  const [state, dispatch] = useReducer(reducer, initState)
  const [value, setValue] = useState('')
  return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
        <button onClick={() => dispatch({ type: 'SUB' })}>Substract</button>
        <button onClick={() => dispatch({ type: 'MERGE', payload: value })}>Merge</button>
        <input onChange={({ target: { value } }) => {
          setValue(value)
        }} />
        <div>{
          state.array.map((item, index) => <p key={index}>{item}</p>)
        }</div>
      </>
  )
}
export default CounterReducer
