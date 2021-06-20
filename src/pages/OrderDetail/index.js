import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {HOST_NAME} from '../../config';
import {getData} from '../../utils';

const OrderDetail = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const onCancel = async () => {
    const token = await getData('token');
    const tran = await axios.post(
      `${HOST_NAME.api}/transaction/${transaction.id}`,
      {status: 'CANCELLED'},
      {headers: {Authorization: token.value}},
    );
    navigation.reset({
      index: 0,
      routes: [{name: 'MainApp', params: {screen: 'Order'}}],
    });
  };
  return (
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
            image={{uri: item.picturePath}}
            items={transaction.totalItem}
            name={item.name}
            price={item.price}
            type="order-summary"
          />
          <Gap height={8} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label={item.name} number={transaction.totalPrice} />
          <ItemValue label="Driver" number={transaction.driver} />
          <ItemValue label="Tax 2.5%" number={transaction.tax} />
          <ItemValue
            label="Total Price"
            number={transaction.total}
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No." value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No." value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue
            label={'#' + transaction.id}
            value={transaction.status}
            valueColor={
              transaction.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'
            }
          />
        </View>
        {transaction.status === 'PENDING' ? (
          <View style={styles.button}>
            <Button title="Cancel My Order" type="warning" onPress={onCancel} />
          </View>
        ) : (
          <Gap height={16} />
        )}
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

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
