import { Card, Text } from '@mantine/core';
import { useSelector } from 'react-redux';

export const Posts = () => {
  const state = useSelector(state => state.posts);

  return (
    <>
      {state.posts.map(post => (
        <Card key={post.id} shadow="sm" p="xl">
          <Text weight={700} size="lg">
            {post.title}
          </Text>
          <Text size="sm">{post.description}</Text>
        </Card>
      ))}
    </>
  );
};
