import { Card, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import { PostForm } from './PostForm';

export const Posts = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <>
      <PostForm />
      {posts.map(post => (
        <Card key={post.id} shadow="md" p="xl" radius={20}>
          <Text weight={700} size="lg">
            {post.title}
          </Text>
          <Text size="sm">{post.description}</Text>
        </Card>
      ))}
    </>
  );
};
