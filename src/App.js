import { Counter } from './features/counter/Counter';
import { Center, Container } from '@mantine/core';

export const App = () => {
  return (
    <Container
      style={{
        height: '100vh',
        backgroundColor: 'red',
      }}
      fluid
    >
      <Counter />
    </Container>
  );
};
