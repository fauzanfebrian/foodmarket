import axios from 'axios';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  WebScreen,
} from '../../components';
import {HOST_NAME} from '../../config';
import {getData} from '../../utils';

const OrderSummary = ({navigation, route}) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('https://google.com');
  const {
    item: {name, picturePath, price, id},
    transaction: {totalItem, totalPrice, driver, tax, total},
    userProfile,
  } = route.params;

  const onCheckout = async () => {
    try {
      const data = {
        food_id: id,
        user_id: userProfile.id,
        quantity: totalItem,
        total,
        status: 'PENDING',
      };
      const token = await getData('token');
      const checkout = await axios.post(`${HOST_NAME.api}/checkout`, data, {
        headers: {Authorization: token.value},
      });
      setPaymentUrl(checkout.data.data.payment_url);
      setIsPaymentOpen(true);
    } catch {}
  };

  const onNaveChange = state => {
    const urlSuccess = `http://foodmarket-backend.buildwithangga.id/midtrans/success?order_id=4044&status_code=201&transaction_status=pending`;
    const titleWeb = 'Laravel';
    if (state.title === titleWeb)
      navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]});
  };

  return isPaymentOpen ? (
    <WebScreen
      source={{uri: paymentUrl}}
      onNavigationStateChange={onNaveChange}
      onClose={() => setIsPaymentOpen(false)}
    />
  ) : (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <View>
        <Header
          title="Payment"
          subTitle="You deserve better meal"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <Gap height={4} />
          <ItemListFood
            image={{uri: picturePath}}
            items={totalItem}
            name={name}
            price={price}
            type="order-summary"
          />
          <Gap height={8} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label={name} number={totalPrice} />
          <ItemValue label="Driver" number={driver} />
          <ItemValue label="Tax 2.5%" number={tax} />
          <ItemValue label="Total Price" number={total} valueColor="#1ABC9C" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>
        <View style={styles.button}>
          <Button title="Checkout Now" onPress={onCheckout} />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 10,
    backgroundColor: 'white',
    marginTop: 24,
  },
  button: {paddingHorizontal: 24, marginVertical: 24},
  label: {
    color: '#020202',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  page: {flex: 1, backgroundColor: '#fafafc'},
});
