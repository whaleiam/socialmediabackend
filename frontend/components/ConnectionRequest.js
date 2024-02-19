// UserItem.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';


const getRandomColor = () => {
  const colors = ['red', 'green', 'blue', 'orange', 'purple', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
};
const ConnectionsRequest = ({user, onAccept, onDelete}) => {
  const imageSource = user.profilePic ? {uri: user.profilePic} : null;
  const backgroundColor = imageSource ? null : getRandomColor();

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={[styles.profilePic, {backgroundColor}]}>
          {
            imageSource &&
          <Image source={user.profilePic} style={styles.profilePic} />
          }
        </View>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
<<<<<<< HEAD
        <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={onAccept}>
          <Text>accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onDelete}>
          <Text>delete</Text>
=======
        <TouchableOpacity
          style={[styles.button, styles.acceptButton]}
          onPress={onAccept}>
          <Text>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onDelete}>
          <Text>Delete</Text>
>>>>>>> a5c4e58b5b23000cb66853f1924c23ecf9c58acb
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    // padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
  },
  name: {
    fontSize: 18,
    marginTop: 12,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
    minWidth: 120,
    minHeight: 20,
    alignItems: 'center',
    marginLeft: 20,
  },
  acceptButton: {
    backgroundColor: '#9D7F95',
  },
  deleteButton: {
    backgroundColor: '#d3d3d3',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green', // Default color, will be overridden by image
  },
});

export default ConnectionsRequest;
