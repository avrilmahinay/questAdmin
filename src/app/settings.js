import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';

const reports = [
  { id: '1', title: 'Security Settings', action: () => console.log('Security Settings') },
  { id: '2', title: 'System Preferences', action: () => console.log('System Preferences') },
  { id: '3', title: 'Notification Settings', action: () => console.log('Notification Settings') },
  { id: '4', title: 'SERVER', action: () => console.log('Server Actions'), buttons: ['RUN', 'STOP'] },
  { id: '5', title: 'Data & Analytics', action: () => console.log('Data & Analytics') },
  { id: '6', title: 'BACK UP & RECOVERY', action: () => console.log('Backup Actions'), buttons: ['Back up', 'Recover'] },
];

const Settings = () => {
  const router = useRouter();

  const renderSettings = ({ item }) => {
    return (
      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>{item.title}</Text>
        {item.buttons ? (
          <View style={styles.multiButtonContainer}>
          {item.buttons.map((btn, index) => {
            const backgroundColor = btn === 'RUN' || btn === 'Back up' ? '#d2d0d0' : '#3d3b3b';
            const textColor = btn === 'RUN' || btn === 'Back up' ? 'black' : 'white';
            return (
              <TouchableOpacity
                key={index}
                style={[styles.primaryButton, { backgroundColor }]}
                onPress={() => console.log(`${btn} action for ${item.title}`)}
              >
                <Text style={[styles.buttonText, { color: textColor }]}>{btn.toUpperCase()}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        ) : (
          <TouchableOpacity style={styles.primaryButton} onPress={item.action}>
            <Text style={styles.buttonText}>OPEN</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.sideNav}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>TEAM POLARIS</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>Admin</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push('dashboard')}>
          <Text style={styles.navItem}>DASHBOARD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('user')}>
          <Text style={styles.navItem}>USER MANAGEMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('task')}>
          <Text style={styles.navItem}>TASK MANAGEMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('reports')}>
          <Text style={styles.navItem}>REPORTS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('settings')}>
          <Text style={styles.navItem}>SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.back('index')}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        <Text style={styles.headerText}>Settings</Text>
        <FlatList
          data={reports}
          renderItem={renderSettings}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
  },
  sideNav: {
    flex: 1,
    backgroundColor: '#c2c7cc',
    padding: 20,
  },
  content: {
    flex: 3,
    padding: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 90,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  navItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  logoutButton: {
    marginTop: 'auto',
    padding: 10,
    backgroundColor: '#0f3c73',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  primaryButton: {
    width: '10%',
    height: 30,
    backgroundColor: '#d2d0d0',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 8,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 10,
  },
  multiButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    alignItems: 'center',
    marginTop: 10,
    gap: 5, // Space between the buttons
  },  
});

export default Settings;
