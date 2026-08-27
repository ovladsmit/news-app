import { fireEvent, render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { Counter } from './Counter'

describe('Counter', () => {
  test('Counter отображается', () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>,
    )

    expect(screen.getByTestId('value-title')).toBeInTheDocument()
  })

  test('Отображает начальное значение счётчика', () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>,
    )

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10')
  })

  test('Увеличивает значение при клике на increment', () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>,
    )

    fireEvent.click(screen.getByTestId('increment'))

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11')
  })

  test('Уменьшает значение при клике на decrement', () => {
    render(
      <StoreProvider initialState={{ counter: { value: 10 } }}>
        <Counter />
      </StoreProvider>,
    )

    fireEvent.click(screen.getByTestId('decrement'))

    expect(screen.getByTestId('value-title')).toHaveTextContent('value = 9')
  })
})