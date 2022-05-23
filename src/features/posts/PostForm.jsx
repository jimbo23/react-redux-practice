import { Button, Input, InputWrapper, Space, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { postAdded } from './postsSlice';
import { useDispatch } from 'react-redux';

export const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChanged = e => setTitle(e.target.value);
  const handleDescriptionChanged = e => setDescription(e.target.value);

  const onSavePost = () => {
    if (title && description) {
      dispatch(postAdded(title, description));
    }
    setTitle('');
    setDescription('');
  };

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
        <Button onClick={onSavePost}>Save Post</Button>
      </form>
    </section>
  );
};
