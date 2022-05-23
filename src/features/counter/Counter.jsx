import { useDispatch, useSelector } from 'react-redux';
import { Button, NumberInput, Stack, Title } from '@mantine/core';
import { addByAmount, decrement, increment, reset } from './counterSlice';
import { useState } from 'react';

export const Counter = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => state.counter);
  const [amount, setAmount] = useState(0);

  const handleAmountChange = val => setAmount(val);

  const addAmount = Number(amount) || 0;

  return (
    <Stack justify="center" align="stretch">
      <Title align="center">Redux Counter App:</Title>
      <Title align="center">current count: {state.count}</Title>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
      <NumberInput value={amount} onChange={handleAmountChange} />
      <Button onClick={() => dispatch(addByAmount(addAmount))}>
        Add by {amount}
      </Button>
    </Stack>
  );
};
