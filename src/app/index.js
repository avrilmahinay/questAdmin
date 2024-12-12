import React from 'react';
import { useRouter } from 'expo-router'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
    
    const router = useRouter ();

  return (
    <View style={styles.container}>

      <View style={styles.halfContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', alignContent: "center", bottom: 70 }}>Quest Board</Text>
        <Text style={styles.title}>Welcome Admin!</Text>
      </View>

      <Image 
        source={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }}
        style={styles.image} 
      />

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          label={'Username'}
          placeholder='Admin Username' 
          placeholderTextColor="#888" 
        />
        <TextInput 
          style={styles.input}
          label={'Password'}
          placeholder='Password' 
          placeholderTextColor="#888" 
          secureTextEntry 
        />
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('dashboard')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c2c7cc',
  },
  halfContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
    paddingHorizontal: 25,
    paddingBottom: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 100,
    color: '#333',
  },
  image: {
    width: 180, 
    height: 180, 
    borderRadius: 90, 
    position: 'absolute',
    top: '50%', 
    transform: [{ translateY: -90 }], 
  },
  formContainer: {
    marginTop: 140, 
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '30%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    width: '5%',
    height: 45,
    marginTop: 10,
    left: 230,
    backgroundColor: '#0f3c73',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
