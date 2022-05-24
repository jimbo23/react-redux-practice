import {
  Button,
  Input,
  InputWrapper,
  Select,
  Space,
  Text,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { postAdded } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

export const AddPostForm = () => {
  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');

  const handleTitleChanged = e => setTitle(e.target.value);
  const handleDescriptionChanged = e => setDescription(e.target.value);

  const onSavePost = () => {
    if (title && description && userId) {
      dispatch(postAdded(title, description, userId));
      setTitle('');
      setDescription('');
      setUserId('');
    }
  };

  const canSave = Boolean(title) && Boolean(description) && Boolean(userId);

  useEffect(() => {
    const enterHandler = e => {
      if (e.key === 'Enter') {
        onSavePost();
      }
    };
    window.addEventListener('keydown', enterHandler);
    return () => {
      window.removeEventListener('keydown', enterHandler);
    };
  }, [onSavePost]);

  return (
    <section>
      <Text size="xl" weight={900}>
        Add a new post
      </Text>
      <form>
        <InputWrapper label="Title">
          <Input
            placeholder="Title"
            value={title}
            onChange={handleTitleChanged}
          />
        </InputWrapper>
        <Space h={20} />
        <InputWrapper label="Description:">
          <Input
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChanged}
          />
        </InputWrapper>
        <Space h={20} />
        <Select
          label="The Author"
          placeholder="Pick one"
          data={users.map(user => ({ label: user.name, value: user.id }))}
          value={userId}
          onChange={setUserId}
        />
        <Space h={20} />

        <Button disabled={!canSave} onClick={onSavePost}>
          Save Post
        </Button>
      </form>
    </section>
  );
};
