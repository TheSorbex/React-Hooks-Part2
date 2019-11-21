import React, { useRef } from 'react'
function RefExample () {
  const inputRef = useRef(null)
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => {
        inputRef.current.focus()
      }}>Focus input</button>
    </div>
  )
}

export default RefExample
