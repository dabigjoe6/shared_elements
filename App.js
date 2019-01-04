import React, { Component } from 'react';
import { ScrollView, Dimensions, Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

let images = [
  { id: '1', src: require('./images/Bogobiri-house.jpg'), name: 'Bogobiri', description: 'Bogobiri is located in the high brow area of Ikoyi. It is one of the many spots to visit in Lagos that come alive mainly at night. It’s a unique place where food meets arts. You would want to go to Bogobiri on Thursday nights for ‘freedom hall’ and Friday nights for ‘Taruwa’. If you’re a lover of spoken word and good music – from jazz to Highlife and AfroBeat – then Bogobiri is for you! Interestingly, it also offers space for occasions like bridal showers, birthdays and more.' },
  { id: '2', src: require('./images/Lagos-Freedom-Park.jpg'), name: 'Freedom Park', description: 'Freedom Park is a memorial and leisure park area in the middle of downtown Lagos. Built on a road that was formerly the broad street prison, it has now evolved into a leisure park where people organize shows and concerts. The Park was constructed to preserve the history and cultural heritage of Nigerians as seen in its strategically placed monumental figures. It’s definitely one of the spots to visit in Lagos.' },
  { id: '3', src: require('./images/Omenka-Gallery.jpg'), name: 'Omenka Gallery', description: 'This is a contemporary Nigerian art gallery owned by Oliver Enwowu, son of one of Nigeria’s leading 21st-century artists, Ben Enwowu. The gallery showcases the works of established and contemporary upcoming Nigerians as well as international artists. Right outside the gallery is a chilled and quiet waterside hangout spot where you can sit and relax, free from the worries of the world.' },
  { id: '4', src: require('./images/Ikeja-city-mall.jpg'), name: 'Ikeja Shopping mall', description: 'This is the busiest relaxation spot in Ikeja and arguably, Lagos. It’s your best option for shopping, entertainment, and leisure, all in one place! It has a variety of restaurants, a cinema, a bookstore, clothing stores, bars, banks, hair salons and makeup studios. Located at Alausa, this mall is a one-stop location for your needs. Is it one of the fun spots in Lagos? A visit will convince you, as visiting the mall would give you the opportunity to see a movie, do some shopping and enjoy great cuisines.' },
  { id: '5', src: require('./images/La-Campagne-Tropicana-Beach-Resort.jpg'), name: 'La Campagne Tropicana Beach Resort', description: 'This is a private beach resort located at Ikegun Ibeju, Lekki. It prides itself in intricate African designs, hospitable staff and iconic views. The resort lies at the edge of the Atlantic ocean so you’ll do well to go with very light clothes, and if you’re not a fan of water, they offer hangout spots with undeniably tasty meals. A great escape from the regular Lagos hustle and bustle and a great place to wind off during the weekends or holidays. They also have well-furnished chalets where guests can lodge in. If it’s a fun intended trip, have your squad come along with you for the ride there is quite a long one!' },
  { id: '6', src: require('./images/NATIONAL-THEATRE-LAGOS.jpg'), name: 'National Theatre', description: 'Constructed in 1976, it is the cultural center for performing arts in Nigeria. The well-equipped hall has the capacity to hold 3000 people. It hosted the Festival of Arts and Culture (FESTAC) in 1977. The building has a bar, a restaurant, and 2 grand cinema halls. The great cultural performances coupled with the theatre’s architectural grandeur have pulled the attention of people from various walks of life.' },
  { id: '7', src: require('./images/Jazz-hole.jpg'), name: 'Jazz hole', description: 'An offspring of Glendora books, the Jazz hole is one of the amazing spots in Lagos. It is located at Awolowo Road, Ikoyi. It is a place where literature meets good music. There’s a plethora of African artwork in the hole to help create a relaxed atmosphere. It’s known as one of the best cultural music shops in the country. It has a snack bar with great coffee and yummy sandwiches among other snacks.' },
  { id: '8', src: require('./images/GET-arena.jpg'), name: 'GET arena', description: 'It is located directly opposite the Palms shopping mall. Go-karting is a typical example of a break from the norm and children will also attest to this while they enjoy it. They also have a bar and an arcade with a wall climbing section. Worried about what fun spots in Lagos to visit? The GET arena would be an awesome choice.' },
]

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isImageSelected: false
    }

    this.openImage = this.openImage.bind(this);
    this.newPosition; //position of the detail view
    this.oldposiotion; //position of the image in the scroll view
  }

  openImage() {
    this.setState({ isImageSelected: true })
  }
  render() {
    return (
      <View>
        <ScrollView>
          {images.map((image => {
            return (
              <TouchableWithoutFeedback key={image.id} onPress={() => this.openImage()}>
                <Image style={styles.image} resizeMode='cover' source={image.src} />
              </TouchableWithoutFeedback>
            )
          }))}
        </ScrollView>
        <View style={[StyleSheet.absoluteFill, { alignItems: 'center', }]}>
          <View style={{ flex: 2, marginBottom: '10%' }}>
            <Image source={this.state.isImageSelected ? images[0].src : null} style={{ width: Dimensions.get('window').width, }} />
          </View>
          <View style={{ positio: 'absolute', bottom: '-35%', paddingHorizontal: '3%', flex: 1, backgroundColor: 'white' }}>
            <Text style={{ color: "black", fontSize: 25, fontWeight: '500', marginBottom: '3%' }}>{images[0].name}</Text>
            <Text style={{ color: "black", fontSize: 14, lineHeight: 20 }}>{images[0].description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width - 20,
    marginVertical: '3%',
    borderRadius: 15
  }
})