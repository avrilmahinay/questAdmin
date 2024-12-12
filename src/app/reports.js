import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const reports = [
  { id: '1', title: 'USER14442 Refuses to pay', description: 'I have been doing the quest for 2 hours and did all the QG instructed, he still refuses to pay.' },
  { id: '2', title: 'USER68244 Has Canceled the quest post', description: "I'll post it tomorrow." },
  { id: '3', title: 'USER51222 Punched me in the nuts', description: 'I accidentally touched his ass and he punched me in the nuts.' },
  { id: '4', title: 'USER09001 Got into an accident', description: 'I got into a hit and run accident, I won’t be able to finish the quest.' },
  { id: '5', title: 'USER51113 Has Canceled the quest post', description: 'At the back of the CITC building trash has been piling up.' },
  { id: '6', title: 'USER00001', description: 'I want money.' },
];

const Reports = () => {
  const router = useRouter();

  const renderReport = ({ item }) => (
    <View style={styles.reportCard}>
      <View style={styles.reportHeader}>
        <Feather name="info" size={20} color="black" style={styles.infoIcon} />
        <Text style={styles.reportTitle}>{item.title}</Text>
      </View>
      <Text style={styles.reportDescription}>{item.description}</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.discussButton}>
          <Text style={styles.buttonText}>DISCUSS</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );

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
        <Text style={styles.headerText}>Reports</Text>
        <FlatList
          data={reports}
          renderItem={renderReport}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reportCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoIcon: {
    marginRight: 10,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reportDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discussButton: {
    width: '10',
    height: 30,
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  profileImage: {
    width: 60,
    height: 60,
    bottom: 40,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
});

export default Reports;
