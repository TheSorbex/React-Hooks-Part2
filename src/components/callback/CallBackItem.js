import React from 'react'
const CallBackItem = React.memo((props) => {
  console.log('children')
  return (
    <div>
      <h1>CallBackItem</h1>
      <button onClick={() => {
        props.increment()
      }}>Increase</button>
    </div>
  )
})

export default CallBackItem
