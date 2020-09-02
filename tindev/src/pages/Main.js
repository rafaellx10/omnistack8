import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';

export default function Main({navigation}) {
  async function handleLogOff() {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleLogOff}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.cardContainer}>
        <View style={[styles.card, {zIndex: 3}]}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Diego Fernandes</Text>
            <Text style={styles.bio} numberOfLines={3}>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </Text>
          </View>
        </View>

        <View style={[styles.card, {zIndex: 2}]}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Diego Fernandes</Text>
            <Text style={styles.bio} numberOfLines={3}>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </Text>
          </View>
        </View>

        <View style={[styles.card, {zIndex: 1}]}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.name}>Diego Fernandes</Text>
            <Text style={styles.bio} numberOfLines={3}>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={dislike} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={like} />
        </TouchableOpacity>
      </View>

      <View />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {marginTop: 40},
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    marginTop: -50,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },
  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  avatar: {
    flex: 1,
    height: 300,
  },
  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
    lineHeight: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
