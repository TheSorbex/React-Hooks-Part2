import React from 'react'
import './App.css'
import CounterReducer from './components/CounterReducer'
import RefExample from './components/InputRef'
import MemoExample from './components/MemoExample'
import CallBackParent from './components/callback/CallBackParent'
function App () {
  return (
    <div className='App'>
      {/* <h1>UseReducer</h1>
      <CounterReducer />
      <h1>UseRef</h1>
      <RefExample /> */}
      <CallBackParent />
      {/* <MemoExample /> */}
    </div>
  )
}

export default App
