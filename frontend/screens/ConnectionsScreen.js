import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import ConnectionsRequestList from '../components/ConnectionsRequestList';
import ConnectionsList from '../components/ConnectionsList';
import {dbURI} from '../App';
import axios from 'axios';

const ConnectionsScreen = () => {

  const [activeTab, setActiveTab] = useState('tab1');
  const [query, setQuery] = useState('');
  const [connections, setConnections] = useState();
  const [requests, setRequests] = useState();
  const [filteredConnectionUsers, setFilteredConnectionUsers] = useState(connections);
  const [filteredRequestUsers, setFilteredRequestUsers] = useState(requests);

  const getRequests = async() => {
    try {
      const response = await axios.get(''); // get request backend
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const getConnections = async() => {
    try {
      const response = await axios.get(''); // get request backend
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchData = async() => {
      const data = await getRequests();
      setRequests(data);
    };
    fetchData;
  }, []);

  useEffect(() => {
    const fetchData = async() => {
      const data = await getConnections();
      setConnections(data);
    };
    fetchData;
  }, []);

  const renderContent = () => {
    if (activeTab === 'tab1') {
      return <View><Text style={styles.tabTitle}>Connection Requests</Text><ConnectionsRequestList users={filteredRequestUsers} /></View>;
    } else if (activeTab === 'tab2') {
      return <View><Text style={styles.tabTitle}>Your Connections</Text><ConnectionsList users={filteredConnectionUsers} /></View>;
    }
  };

  const handleSearch = (text) => {
    setQuery(text);
    const formattedQuery = text.toLowerCase();
    if (activeTab == 'tab1') {
      const filteredData = requests.filter(user => {
        return user.name.toLowerCase().includes(formattedQuery);
      });
      setFilteredRequestUsers(filteredData);
    } else {
      const filteredData = connections.filter(user => {
        return user.name.toLowerCase().includes(formattedQuery);
      });
      setFilteredConnectionUsers(filteredData);

    }
  };

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Connections"
        value={query}
        onChangeText={handleSearch}
      />
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'tab1' && styles.activeTab]}
            onPress={() => setActiveTab('tab1')}
          >
            <Text>requests</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'tab2' && styles.activeTab]}
            onPress={() => setActiveTab('tab2')}
          >
            <Text>connections</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          {renderContent()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    marginRight: 15,
    width: 120, // Width of the button
    height: 29, // Height of the button
    backgroundColor: 'lightgray', // Background color of the button
    justifyContent: 'center', // Centers the text inside the button
    alignItems: 'center', // Aligns text to the center horizontally
    borderRadius: 15, // Rounded edges
  },
  activeTab: {
    backgroundColor: 'gray',
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  searchBar: {
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#e8e8e8',
  },
});

export default ConnectionsScreen;
