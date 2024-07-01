import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [showLocations, setShowLocations] = useState(false);
  const [locationStyles, setLocationStyles] = useState(styles.location);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    setShowLocations(!showLocations);
    setLocationStyles(showLocations ? styles.location : [styles.location, styles.blackText]);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in...");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/green-back.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.centeredText}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </View>

      <View style={styles.centeredText}>
        <ThemedText type="subtitle">Sign In</ThemedText>
        <ThemedText style={styles.subText}>Enter your email:</ThemedText>

        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={[styles.input, showLocations && styles.whiteText]}
            placeholder="Your email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#FFFFFF" // Placeholder text color
          />
        </ThemedView>

        <ThemedText style={styles.subText}>Enter your password:</ThemedText>

        <ThemedView style={styles.inputContainer}>
          <TextInput
            style={[styles.input, showLocations && styles.whiteText]}
            placeholder="Your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} // Mask the input for password
            placeholderTextColor="#FFFFFF" // Placeholder text color
          />
        </ThemedView>
        <ThemedText style={styles.subText}>  </ThemedText>


        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <ThemedText style={[styles.subText, styles.smallText]}>
          By signing in, you agree to our <Text style={styles.boldText}>Terms of Service</Text> and <Text style={styles.boldText}>Privacy Policy</Text>
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  location: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
    fontSize: 18,
  },
  blackText: {
    color: '#000000',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  locationsContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  locationList: {
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
  },
  input: {
    height: 40,
    color: '#FFFFFF', // User entered text color
  },
  centeredText: {
    alignItems: 'center',
  },
  subText: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  smallText: {
    fontSize: 12, // Smaller font size
  },
  boldText: {
    fontWeight: 'bold', // Bold text
  },
  button: {
    backgroundColor: '#D2B48C', // Tan color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});