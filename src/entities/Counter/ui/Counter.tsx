import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
interface CounterProps {
  /*Доп классы*/
  className?: string;
  
}

export const Counter = ({ className }: CounterProps) => {
  const counterValue = useSelector(getCounterValue)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <div className={className}>
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <Button data-testid='increment'onClick={increment}>
        increment
      </Button>
      <Button data-testid='decrement'onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};