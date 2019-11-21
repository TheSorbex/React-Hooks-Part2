UseReducer()

const [state, dispatch] = React.useReducer(reducerFn, initialState, initFn);

useReducer() is a method from the React Hooks API, similar to useState but gives you more control to manage the state. It takes a reducer function and initial state as arguments and returns the state and dispatch method:

Most of the time, you are well covered with just useState() method, which is built on top of useReducer(). But there cases when useReducer() is preferable.

Next state depends on the previous
Complex state shape

UseCallBack()
UseRef()
UseFetch() = custom hook
UseMemo()

The main difference between the two is that 'useCallback' returns a memoized callback and 'useMemo' returns a memoized value that is the result of the function parameter. ... Every other re-render will then get a cached function.