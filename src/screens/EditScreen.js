import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      initialLabels={{ title: 'Edit Title', content: 'Edit Content' }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.goBack());
      }}
    />
  );
};

export default EditScreen;
