import React, {Component, useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import InstagramStory from './InstagramStory';
import macbook from './macbook.jpg';
import ShoppingCart from './ShoppingCart';
import {LocalAPI} from './src/LocalAPI';

const App = () => {
  const [qty, setQty] = useState(0);
  return (
    <View>
      {/* <ShoppingCart qty={qty} />
      <StoreCard onButtonPress={() => setQty(qty + 1)} /> */}
      <LocalAPI />
    </View>
  );
};

const Apps = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  return (
    <View>
      <ScrollView>
        {show && <LifeCycle />}
        {/* <ShoppingCart /> */}
        {/* <YoutubeProfile /> */}
        {/* <StoreCard /> */}
        {/* <Example /> */}
      </ScrollView>
    </View>
  );
};

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('==> calling constructor');
    this.state = {subscriber: 100};
  }

  componentDidMount() {
    console.log('==> calling componentDidMount');
    setTimeout(() => {
      this.setState({subscriber: 120});
    }, 2000);
  }

  componentDidUpdate() {
    console.log('==> calling componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('==> calling componentWillUnmount');
  }

  render() {
    console.log('==> calling render');
    return <Text>{this.state.subscriber} Ribu Subscribers</Text>;
  }
}

const YoutubeProfile = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'gray',
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor: 'red', width: 30, height: 30}} />
        <View style={{backgroundColor: 'green', width: 30, height: 55}} />
        <View style={{backgroundColor: 'gold', width: 30, height: 65}} />
        <View style={{backgroundColor: 'blue', width: 30, height: 75}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1589815016726749184/xHKF0l96_400x400.jpg',
          }}
          style={{
            margin: 10,
            width: 70,
            height: 70,
            borderRadius: 50,
            borderColor: 'black',
            borderWidth: 2,
          }}
        />
        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            Yohanes RF Silitonga
          </Text>
          <Text>@yohanesrfsilitonga</Text>
          <Text>1 M Subscribers</Text>
        </View>
      </View>
    </>
  );
};

const StoreCard = ({onButtonPress}) => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={styles.box} />

      <View style={styles.card}>
        <Image style={styles.image} source={macbook} />
        <Text style={{marginVertical: 16, fontWeight: 'bold'}}>
          New Macbook Pro 2021
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994a',
            marginTop: 40,
          }}>
          Rp. 25.000.000
        </Text>
        <TouchableOpacity onPress={onButtonPress}>
          <View
            style={{
              marginTop: 16,
              backgroundColor: 'green',
              borderRadius: 25,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: 14,
              }}>
              Beli
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0abde3',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#1abc9c',
    borderWidth: 2,
    marginTop: 10,
  },
  card: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
    marginTop: 40,
  },
  image: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
});

const Example = () => {
  return (
    <View style={{marginTop: 50}}>
      <View style={{width: 100, height: 100, backgroundColor: '#1abc9c'}} />
      <Text>Yohanes</Text>
      <Ray />
      <Photo />
      <TextInput style={{borderWidth: 1, marginTop: 10}} />
      <ClassComponent />
    </View>
  );
};

const Ray = () => {
  return <Text>Ray</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class ClassComponent extends Component {
  render() {
    return <Text>This text from ClassComponents</Text>;
  }
}

export default App;
