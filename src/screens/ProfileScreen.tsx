import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Platform,
  ImageSourcePropType,
} from 'react-native';

const ProfileScreen: React.FC = () => {
  // Reference to background image in assets folder
  const backgroundImage: ImageSourcePropType = require('../assets/background.png');


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={styles.bgImage}
      >
        <View style={styles.contentWrap}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profileContainer}>
            <Text style={styles.subtitle}>Welcome to your profile!</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  bg: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bgImage: {
    opacity: 0.8,
  },
  contentWrap: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 20,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1b3b5a',
    marginTop: 6,
  },
  subtitle: {
    fontSize: 18,
    color: '#2b4a62',
    marginTop: 6,
    marginBottom: 22,
  },
  profileContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProfileScreen;
