import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ route, navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: blogPost.id })}
        >
          <Entypo name='edit' size={30} color='black' />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.boxStyle}>
        <Text style={styles.titleStyle}>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  boxStyle: {
    bottom: 50,
    borderWidth: 1,
    marginHorizontal: 15,
    padding: 10,
    minHeight: 200,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    marginVertical: 10,
  },
});
