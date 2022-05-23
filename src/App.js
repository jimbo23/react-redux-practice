import { Counter } from './features/counter/Counter';
import { Container, Stack } from '@mantine/core';

export const App = () => {
  return (
    <Container
      style={{
        height: '100vh',
      }}
      fluid
    >
      <Stack justify="center" align="stretch">
        <Counter />
      </Stack>
    </Container>
  );
};
