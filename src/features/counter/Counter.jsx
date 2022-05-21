import { useDispatch, useSelector } from 'react-redux';
import { Button, Title } from '@mantine/core';
import { decrement, increment } from './counterSlice';

export const Counter = () => {
  const state = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Title>current count: {state.count}</Title>
      <Button onClick={() => dispatch(increment())}>Add</Button>
      <Button onClick={() => dispatch(decrement())}>Minus</Button>
    </>
  );
};
