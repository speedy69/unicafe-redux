const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const increaseGood = { good: state.good +1, ok: state.ok, bad: state.bad }
      return increaseGood
    case 'OK':
      const increaseOk = { good: state.good, ok: state.ok + 1, bad: state.bad }
      return increaseOk
    case 'BAD':
      const increaseBad = { good: state.good, ok: state.ok, bad: state.bad + 1 }
      return increaseBad
    case 'ZERO':
      const resetState = { good: 0, ok: 0, bad: 0 }
      return resetState
    default: return initialState
  }
  
}

export default counterReducer