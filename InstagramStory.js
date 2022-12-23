import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

const InstagramStory = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPhotos(data.splice(0, 10));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(photos[0]);

  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {photos.length > 0 &&
          photos.map(photo => {
            return (
              <View
                key={photo.id}
                style={{marginRight: 3, alignItems: 'center', width: 80}}>
                <Image
                  source={{uri: `${photo.url}`}}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}
                />
                <Text style={{textAlign: 'center'}}>
                  {photos && photo.title}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

export default InstagramStory;
