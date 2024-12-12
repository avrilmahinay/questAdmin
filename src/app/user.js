import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const users = [
  { id: 1, name: 'Anna Cruz', age: 19, email: 'cruzanna@gmail.com', phone: '09325186408' },
  { id: 2, name: 'Avril Mahinay', age: 20, email: 'vmahinay@gmail.com', phone: '09925438347' },
  { id: 3, name: 'Ben Santos', age: 18, email: 'bsantos@gmail.com', phone: '09325186333' },
  { id: 4, name: 'Cath Yan', age: 21, email: 'cath21@gmail.com', phone: '09203539273' },
  { id: 5, name: 'Derik Chan', age: 21, email: 'derick@gmail.com', phone: '09123653826' },
  { id: 6, name: 'Edena Lagumbay', age: 20, email: 'edenalg@gmail.com', phone: '09095465863' },
  { id: 7, name: 'Fedrick Miller', age: 19, email: 'fedmiller@gmail.com', phone: '09203539273' },
  { id: 8, name: 'Jules Filoteo', age: 20, email: 'jules@gmail.com', phone: '09182303489' },
  { id: 9, name: 'Jonnavien Asuelo', age: 20, email: 'jonnavien@gmail.com', phone: '09355191408' },
  { id: 10, name: 'Joana Razon', age: 24, email: 'jaona123@gmail.com', phone: '09355191408' },
  { id: 11, name: 'Macky Zamora', age: 22, email: 'zamoram@gmail.com', phone: '09098745647' },
  { id: 12, name: 'Queen Impo', age: 18, email: 'queenip@gmail.com', phone: '09867430986' },
  { id: 13, name: 'Shiela Mosqueda', age: 20, email: 'shielam@gmail.com', phone: '09609870556' },
  { id: 14, name: 'Vivian Lastimosa', age: 23, email: 'lastimosa@gmail.com', phone: '09138246894' },
];

const UserManagement = () => {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.tableRow,
        { backgroundColor: item.id % 2 === 0 ? '#f2f2f2' : '#eaddf5' }, 
      ]}
    >
      <Text style={[styles.cell, styles.cellNumber]}>{item.id}</Text>
      <Text style={[styles.cell, styles.cellName]}>{item.name}</Text>
      <Text style={[styles.cell, styles.cellAge]}>{item.age}</Text>
      <Text style={[styles.cell, styles.cellEmail]}>{item.email}</Text>
      <Text style={[styles.cell, styles.cellPhone]}>{item.phone}</Text>
      <View style={styles.actionIcons}>
        <TouchableOpacity>
          <Entypo name="eye" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Feather name="edit" size={20} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <MaterialCommunityIcons name="delete-outline" size={20} color="red" />
        </TouchableOpacity>
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
            <Text style={{ fontSize: 14, color: '#555'}}>Admin</Text>
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
        <Text style={styles.userText}>User Management</Text>
        <View style={styles.userContent}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
          <Entypo name="dot-single" size={26} color="red" style={{ marginLeft: -17, bottom: 5.6 }} />
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
        </View>

        <View style={styles.questContainer}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Quest Giver</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}>Quest Taker</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.cell, styles.headerCell, styles.cellNumber]}>No.</Text>
          <Text style={[styles.cell, styles.headerCell, styles.cellName]}>Name</Text>
          <Text style={[styles.cell, styles.headerCell, styles.cellAge]}>Age</Text>
          <Text style={[styles.cell, styles.headerCell, styles.cellEmail]}>Email</Text>
          <Text style={[styles.cell, styles.headerCell, styles.cellPhone]}>Phone Number</Text>
        </View>

        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
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
    marginBottom: 20,
  },
  userContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
    bottom: 50,
  },
  questContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
  },
  cell: {
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  headerCell: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cellNumber: {
    width: '10%',
  },
  cellName: {
    width: '25%',
  },
  cellAge: {
    width: '10%',
  },
  cellEmail: {
    width: '30%',
  },
  cellPhone: {
    width: '20%',
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
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
});

export default UserManagement;
