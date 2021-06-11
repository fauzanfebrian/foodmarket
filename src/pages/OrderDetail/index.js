import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';

const OrderDetail = ({navigation}) => {
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
            image={FoodDummy1}
            items={15}
            name="Sop Iga"
            price="300.000"
            type="order-summary"
          />
          <Gap height={8} />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
          <ItemValue label="Driver" value="IDR 50.000" />
          <ItemValue label="Tax 10%" value="IDR 1.800.390" />
          <ItemValue
            label="Total Price"
            value="IDR 390.803.000"
            valueColor="#1ABC9C"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Deliver To:</Text>
          <ItemValue label="Name" value="Angga Risky" />
          <ItemValue label="Phone No." value="0822 0819 9688" />
          <ItemValue label="Address" value="Setra Duta Palima" />
          <ItemValue label="House No." value="A5 Hook" />
          <ItemValue label="City" value="Bandung" />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Order Status:</Text>
          <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
        </View>
        <View style={styles.button}>
          <Button
            title="Cancel My Order"
            // onPress={() => navigation.replace('SuccessOrder')}
            type="warning"
          />
        </View>
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
