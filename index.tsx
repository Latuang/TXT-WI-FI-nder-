import React, { useState } from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [showLocations, setShowLocations] = useState(false);
  const [locationStyles, setLocationStyles] = useState(styles.location);

  const handleButtonPress = () => {
    setShowLocations(!showLocations);
    setLocationStyles(showLocations ? styles.location : [styles.location, styles.blackText]);
  };

  const handleContactPress = () => {
    // Replace with your email and phone number for Zelle and contact
    const email = 'exe@example.com';
    const phoneNumber = '+1234567890';

    // Open default email app with pre-filled email
    Linking.openURL(`mailto:${email}`);

    // To open phone dialer with pre-filled number
    // Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/new-background.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">WI FI-nder!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView>
        <ThemedText>In need of a space with free wifi? You've come to the right place</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Choose Location</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore options</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Show Locations</Text>
        </TouchableOpacity>
      </ThemedView>

      {showLocations && (
        <ThemedView style={styles.locationsContainer}>
          <ThemedText type="header" style={[styles.locationHeader, styles.whiteText]}>South Central</ThemedText>
          <View style={styles.locationList}>
            <Text style={locationStyles}>STARBUCKS, 3584 S Figueroa St, Los Angeles, CA 90007</Text>
            <Text style={locationStyles}>EARTH BEAN COFFE, 1040 S Los Angeles St</Text>
            <Text style={locationStyles}>Natural History Museum of Los Angeles, 900 Exposition Blvd</Text>
            <Text style={locationStyles}>Vermont Square Branch library, 1201 W 48th St</Text>
            <Text style={locationStyles}>Cup O Joy, 3016 S Figueroa St</Text>
            <Text style={locationStyles}>California Science Center, 700 Exposition Park Dr,</Text>
            <Text style={locationStyles}>The Coffee Bean & Tea Leaf, 333 S Alameda St #108,,</Text>


            



            
          </View>
        </ThemedView>
      )}

      {/* Contact Section */}
      <ThemedView style={styles.contactContainer}>
        <ThemedText type="subtitle">Contact Us</ThemedText>
        <TouchableOpacity onPress={handleContactPress} style={styles.contactItem}>
          <Text style={styles.contactText}>Number: 503 - 123 - 999</Text>
          <Text style={styles.contactText}>Email: WI-FI-nder@email.com</Text>

        </TouchableOpacity>
        {/* Uncomment the following to add phone number for contact */}
        {/* <TouchableOpacity onPress={handleContactPress} style={styles.contactItem}>
          <Text style={styles.contactText}>Phone: +1234567890</Text>
        </TouchableOpacity> */}
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
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
  locationHeader: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  locationsContainer: {
    alignItems: 'center',
    marginHorizontal: 10, // Adjust margins to match the button
    marginTop: 10,
  },
  locationList: {
    alignItems: 'center',
  },
  contactContainer: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCCCCC',
  },
  contactItem: {
    paddingVertical: 5,
  },
  contactText: {
    color: '#007AFF',
    fontSize: 16,
  },
});