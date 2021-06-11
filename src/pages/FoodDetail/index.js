import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy5, ICBackWhite} from '../../assets';
import {Button, Counter, Gap, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy5} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healty</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <Gap height={24} />
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {
    height: 330,
    padding: 16,
    paddingTop: 24,
  },
  back: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    marginTop: -35,
    paddingHorizontal: 16,
    paddingTop: 26,
    backgroundColor: 'white',
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
  },
  desc: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
  },
  label: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
  },
  footer: {flexDirection: 'row', alignItems: 'center', paddingVertical: 16},
  button: {width: 163},
  priceContainer: {flex: 1},
  labelTotal: {color: '#8D92A3', fontSize: 13, fontFamily: 'Poppins-Regular'},
  priceTotal: {color: '#020202', fontSize: 18, fontFamily: 'Poppins-Regular'},
});
