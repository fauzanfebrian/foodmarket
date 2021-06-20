import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header, OrderTabSection} from '../../components';
import {getOrders} from '../../redux/action';
import Empty from './Empty';

const Order = () => {
  const dispastch = useDispatch();
  const {orders} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispastch(getOrders());
  }, []);
  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <Empty />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="wait for the best meal" />
          <View style={styles.tabSection}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
  tabSection: {flex: 1, marginTop: 24},
});
