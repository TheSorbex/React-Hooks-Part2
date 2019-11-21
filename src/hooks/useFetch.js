import { useState, useEffect, useRef } from 'react'

const useFetch = url => {
  let isCurrent = useRef(true)
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    return () => {
      isCurrent = false
    }
  }, [])

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
    window.fetch(url)
      .then(res => res.json())
      .then((res) => {
        if (isCurrent.current) {
          setState({ data: res, loading: false })
        }
      })
  }, [url, setState])

  return state
}

export default useFetch
