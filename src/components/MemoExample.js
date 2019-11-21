import React, { useState, useMemo } from 'react'
import useFetch from '../hooks/useFetch'
const charCodeAt = (data) => {
  if (!data) {
    return []
  }
  console.log('START!')
  return data.results.map((item) => {
    let res = 0
    item.name.split('').forEach((char) => {
      res += +char.charCodeAt()
    })
    return res
  })
}

const MemoExample = () => {
  const [page, setPage] = useState(1)
  const { data } = useFetch(`https://swapi.co/api/people?page=${page}`)
  const [counter, setCounter] = useState(1)
  const charedList = useMemo(() => charCodeAt(data), [data, charCodeAt])
  return (
    <div>
      <div>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>Increment</button>
        <p>Counter: {counter}</p>
      </div>
      <div>
        <button onClick={() => {
          setPage(page + 1)
        }}>Next Page</button>
        <p>Page: {page}</p>
      </div>
      <div>{data && charedList.map((charSum, index) => {
        return <div key={data.results[index].name}>{charSum} {data.results[index].name}</div>
      })}</div>
    </div>
  )
}

export default MemoExample
