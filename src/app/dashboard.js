import React, { useState } from 'react';
import ProgressCircle from 'react-native-progress/Circle';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const DashboardCard = ({ title, value, progress, color, size }) => {
  return (
    <View style={styles.card}>
      <View style={styles.circleContainer}>
        <ProgressCircle
          size={size}
          progress={progress}
          thickness={10}
          color={color}
          unfilledColor="lightgrey"
        />
        <Text style={[styles.cardValue, { color }]}>{value}</Text>
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const AdminDashboard = () => {
  const [activeQuestGivers] = useState(79);
  const [activeQuestTakers] = useState(82);
  const [totalTasksPosted] = useState(102);
  const [totalEarningsDistributed] = useState(18672);

  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.sideNav}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>TEAM POLARIS</Text>
            <Text style={styles.userRole}>Admin</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.navigate('')}>
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
        <Text style={styles.dashboardText}>Dashboard</Text>
        <View style={styles.userContent}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
          <Entypo name="dot-single" size={26} color="red" style={{ marginLeft: -17, bottom: 5.6 }} />
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
        </View>

        <View style={styles.cardContainer}>
          <DashboardCard
            title="Active Quest Givers"
            value={activeQuestGivers}
            progress={0.79}
            color="green"
            size={150}
          />
          <DashboardCard
            title="Active Quest Takers"
            value={activeQuestTakers}
            progress={0.82}
            color="blue"
            size={150}
          />
          <DashboardCard
            title="Total Tasks Posted"
            value={totalTasksPosted}
            progress={1.02}
            color="gold"
            size={150}
          />
          <DashboardCard
            title="Total Earnings Distributed"
            value={totalEarningsDistributed}
            progress={1}
            color="red"
            size={150}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ececec',
  },
  sideNav: {
    flex: 1,
    backgroundColor: '#c2c7cc',
    padding: 20,
    justifyContent: 'space-between', 
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 90
  },
  textContainer: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  userRole: {
    fontSize: 14,
    color: '#555',
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
  content: {
    flex: 3,
    padding: 20,
  },
  dashboardText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    height: 250,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  circleContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    color: '#555',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: '35%', 
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    bottom: 50,
  },
});

export default AdminDashboard;
