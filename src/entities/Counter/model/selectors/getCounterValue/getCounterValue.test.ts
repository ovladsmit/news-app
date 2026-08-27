import { StateSchema } from "app/providers/StoreProvider"
import { getCounterValue } from "./getCounterValue"
import { counterActions } from "../../slice/CounterSlice"
import { counterReducer } from "../../slice/CounterSlice"
describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state = {
      counter: {value: 10}
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })

})

describe('counterSlice', () => {
  test('increment', () => {
    const state  = { value: 10 }

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })

  test('decrement', () => {
    const state = { value: 10 }

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })
})