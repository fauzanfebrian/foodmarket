import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, OrderTabSection} from '../../components';
import Empty from './Empty';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
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
