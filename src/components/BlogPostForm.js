import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues, initialLabels }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>{initialLabels.title}:</Text>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.inputStyle}
          placeholder='Blog Title'
        />
        <Text style={styles.textStyle}>{initialLabels.content}:</Text>
        <TextInput
          value={content}
          onChangeText={(text) => setContent(text)}
          style={styles.inputStyle}
          placeholder='Blog Content'
        />
        <View style={styles.buttonStyle}>
          <Button title='Save Post' onPress={() => onSubmit(title, content)} />
        </View>
      </View>
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default BlogPostForm;

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  boxStyle: {
    bottom: 50,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonStyle: {
    marginHorizontal: 10,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
});
