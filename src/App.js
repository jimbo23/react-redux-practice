import { Counter } from './features/counter/Counter';
import { Container, Stack } from '@mantine/core';
import { Posts } from './features/posts/Posts';

export const App = () => {
  return (
    <Container
      style={{
        height: '100vh',
      }}
      fluid
    >
      <Stack justify="center" align="stretch">
        {/*<Counter />*/}
        <Posts />
      </Stack>
    </Container>
  );
};
