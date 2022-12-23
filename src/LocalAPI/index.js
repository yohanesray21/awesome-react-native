import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

export const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState([]);
  const [buttonName, setButtonName] = useState('Submit');
  const [selectedUser, setSelectedUser] = useState('');

  const url = 'http://10.0.2.2:3000/users';
  const getData = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setUsers(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const onButtonPress = () => {
    const profileData = {
      name,
      email,
      role,
    };
    if (buttonName === 'Submit') {
      fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(profileData),
      });

      alert('Submit data Success!');

      setName('');
      setEmail('');
      setRole('');

      getData();
    } else if (buttonName === 'Update') {
      fetch(url + `/${selectedUser}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(profileData),
      }).then(response => response.json());
    }

    alert('Update data Success!');

    setName('');
    setEmail('');
    setRole('');

    getData();
    setButtonName('Submit');
  };

  const selectedItem = user => {
    setSelectedUser(user.id);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setButtonName('Update');
  };

  const deleteItem = user => {
    fetch(url + `/${user.id}`, {
      method: 'DELETE',
    });

    getData();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Local API</Text>

        <Text style={styles.text}>Masukkan anggota freelencer</Text>

        <TextInput
          placeholder="Nama Lengkap"
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Roles"
          style={styles.input}
          value={role}
          onChangeText={value => setRole(value)}
        />

        <Button
          title={buttonName}
          style={styles.button}
          onPress={onButtonPress}
        />
        <View style={styles.line} />

        {users.map(user => (
          <ListProfile
            key={user.id}
            name={user.name}
            email={user.email}
            role={user.role}
            onButtonPress={() => selectedItem(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Are you Sure ?', [
                {text: 'No', onPress: () => console.log('tidak')},
                {
                  text: 'Yes',
                  onPress: () => deleteItem(user),
                },
              ])
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

const ListProfile = ({name, email, role, onButtonPress, onDelete}) => {
  return (
    <View style={styles.profile}>
      <TouchableHighlight onPress={onButtonPress}>
        <Image
          source={{
            uri: 'https://gravatar.com/avatar/c7d487a0bb21d3135829c9b30334af77?s=400&d=robohash&r=x',
          }}
          style={styles.avatar}
        />
      </TouchableHighlight>

      <View>
        <Text style={styles.fullName}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.email}>{role}</Text>
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.delete}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 14,
    color: 'black',
  },

  text: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 14,
    color: 'black',
  },
  input: {
    color: 'black',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    marginVertical: 20,
    color: 'red',
  },
  line: {
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 15,
  },

  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  fullName: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 24,
  },
  email: {
    fontSize: 20,
    color: 'black',
  },
  profile: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  delete: {
    fontSize: 24,
    color: 'red',
    position: 'absolute',
    top: 8,
    right: 6,
  },
});
