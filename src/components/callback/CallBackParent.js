import React, { useState, useCallback, useEffect } from 'react'
import CallBackItem from './CallBackItem'
function CallBackParent () {
  const [ count, setCount ] = useState(0)
  const increment = useCallback(() => {
    setCount(c => c + 1)
  }, [setCount])
  useEffect(() => {
    console.log('update')
  }, [increment])
  return (
    <div>
      <h1>CallBackParent</h1>
      <CallBackItem increment={(increment)} />
      <p>Count: {count}</p>
    </div>
  )
}

export default CallBackParent
