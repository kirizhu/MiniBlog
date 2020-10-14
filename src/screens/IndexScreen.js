import React, { useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BlogList from '../components/BlogList';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Entypo name='plus' size={30} color='black' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });
    return () => listener.remove();
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => `${blogPost.id}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.rowStyle}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Show', { id: item.id })}
              >
                <Text style={styles.titleStyle}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <FontAwesome style={styles.iconStyle} name='trash-o' />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
    color: 'black',
  },
});
