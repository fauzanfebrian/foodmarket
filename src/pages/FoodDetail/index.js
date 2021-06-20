import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICBackWhite} from '../../assets';
import {Button, Counter, Gap, Number, Rating} from '../../components';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const {name, price, picturePath, id, ...food} = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});
  getData('userProfile').then(res => setUserProfile(res));
  const onOrder = () => {
    const driver = 25000;
    const totalPrice = totalItem * price;
    const tax = (2.5 / 100) * totalPrice;
    const total = driver + totalPrice + tax;
    const data = {
      item: {name, price, picturePath, id},
      transaction: {totalItem, totalPrice, driver, tax, total},
      userProfile,
    };
    navigation.navigate('OrderSummary', data);
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <ICBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating rating={food.rate} />
            </View>
            <Counter onChangeValue={value => setTotalItem(value)} />
          </View>
          <Text style={styles.desc}>{food.description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>{food.ingredients}</Text>
        </View>
        <Gap height={24} />
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number number={price * totalItem} style={styles.priceTotal} />
          </View>
          <View style={styles.button}>
            <Button title="Order Now" onPress={onOrder} />
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
