import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const tasksAwaitingApproval = [
  { id: '1', title: 'Garbage Clean up', description: 'At the back of the CITC building trash has been piling up.' },
  { id: '2', title: 'Garbage Clean up', description: 'At the back of the CITC building trash has been piling up.' },
  { id: '3', title: 'Garbage Clean up', description: 'At the back of the CITC building trash has been piling up.' },
];

const approvedTasks = [
  { id: '4', title: 'Garbage Clean up', description: 'At the back of the CITC building trash has been piling up.' },
  { id: '5', title: 'Garbage Clean up', description: 'At the back of the CITC building trash has been piling up.' },
];

const TaskManagement = () => {
  const router = useRouter();

  const renderTask = ({ item }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskHeader}>
        <Feather name="info" size={24} color="black" style={styles.infoIcon} />
        <Text style={styles.taskTitle}>{item.title}</Text>
      </View>
      <Text style={styles.taskDescription}>{item.description}</Text>
      <View style={styles.buttonContainer}>

        <View style={styles.leftButtons}>
          <TouchableOpacity style={styles.acceptButton}>
            <Text style={styles.buttonText}>ACCEPT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.declineButton}>
            <Text style={styles.buttonText}>DECLINE</Text>
          </TouchableOpacity>
        </View>
  
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

        <TouchableOpacity onPress={() => router.navigate('dashboard')}>
          <Text style={styles.navItem}>DASHBOARD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('user')}>
          <Text style={styles.navItem}>USER MANAGEMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('task')}>
          <Text style={styles.navItem}>TASK MANAGEMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('reports')}>
          <Text style={styles.navItem}>REPORTS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('settings')}>
          <Text style={styles.navItem}>SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={() => router.back('index')}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.userText}>Task Management</Text>
        <View style={styles.userContent}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
          <Entypo name="dot-single" size={26} color="red" style={{ marginLeft: -17, bottom: 5.6 }} />
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
        </View>

        <Text style={styles.sectionHeader}>Tasks Awaiting Approval</Text>
        <FlatList
          data={tasksAwaitingApproval}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.sectionHeader}>Approved Tasks</Text>
        <FlatList
        data={approvedTasks}
        renderItem={({ item }) => (
            <View style={styles.taskCard}>
            <View style={styles.taskHeader}>
                <Feather name="info" size={24} color="black" style={styles.infoIcon} />
                <Text style={styles.taskTitle}>{item.title}</Text>
            </View>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <View style={styles.approvedTaskContainer}>
                <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }}
                style={styles.appImage}
                />
            </View>
        </View>
  )}
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
  userText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    bottom: 50,
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
  sectionHeader: {
    fontSize: 24,
    left: 50,
    marginBottom: 20,
    marginVertical: 10,
  },
  taskCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoIcon: {
    marginRight: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 10,
  },
  leftButtons: {
    flexDirection: 'row',
    gap: 5, 
  },
  profileImage: {
    width: 60,
    height: 60,
    bottom: 40,
    borderRadius: 30, 
  },  
  acceptButton: {
    width: '48%',
    height: 35,
    backgroundColor: '#4f4d4d',
    padding: 10,
    borderRadius: 5,
  },
  declineButton: {
    width: '50%',
    height: 35,
    backgroundColor: '#4f4d4d',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
  approvedTaskContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },  
  appImage: {
    width: 60,
    height: 60,
    bottom: 40,
    borderRadius: 30,
  },
});

export default TaskManagement;
