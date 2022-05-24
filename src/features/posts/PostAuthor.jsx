import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { Text } from '@mantine/core';

export const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find(user => user.id === userId);

  return (
    <Text fontWeight={900}>{author ? author.name : 'Unknown Author'}</Text>
  );
};
