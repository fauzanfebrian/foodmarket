import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, ItemListFood} from '../..';
import {getInProgress, getPastOrders} from '../../../redux/action';

const InProgress = () => {
  const navigation = useNavigation();
  const dispastch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispastch(getInProgress());
  }, []);
  const contentMap = ({food, user, ...order}) => {
    const driver = 25000;
    const totalPrice = order.quantity * food.price;
    const tax = (2.5 / 100) * totalPrice;
    const total = driver + totalPrice + tax;
    const data = {
      item: food,
      transaction: {
        totalItem: order.quantity,
        totalPrice,
        driver,
        tax,
        total,
        status: order.status,
        id: order.id,
      },
      userProfile: user,
    };
    return (
      <ItemListFood
        key={order.id}
        name={food.name}
        onPress={() => navigation.navigate('OrderDetail', data)}
        image={{uri: food.picturePath}}
        type="in-progress"
        price={order.total}
        items={order.quantity}
      />
    );
  };
  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      {inProgress && inProgress.map(order => contentMap(order))}
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispastch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispastch(getPastOrders());
  }, []);
  const contentMap = ({food, user, ...order}) => {
    const driver = 25000;
    const totalPrice = order.quantity * food.price;
    const tax = (2.5 / 100) * totalPrice;
    const total = driver + totalPrice + tax;
    const data = {
      item: food,
      transaction: {
        totalItem: order.quantity,
        totalPrice,
        driver,
        tax,
        total,
        status: order.status,
        id: order.id,
      },
      userProfile: user,
    };
    return (
      <ItemListFood
        key={order.id}
        name={food.name}
        onPress={() => navigation.navigate('OrderDetail', data)}
        image={{uri: food.picturePath}}
        type="past-orders"
        price={order.total}
        items={order.quantity}
        time={order.updated_at}
        status={order.status}
      />
    );
  };
  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      {pastOrders.map(order => contentMap(order))}
    </ScrollView>
  );
};

const RenderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBarStyle}
    tabStyle={styles.perTabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.textTabLabel(focused)}>{route.title}</Text>
    )}
  />
);

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

  return (
    <TabView
      renderTabBar={props => <RenderTabBar {...props} />}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
      lazy
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  indicatorStyle: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.5,
    marginHorizontal: 12,
    marginBottom: -3,
    borderRadius: 3,
  },
  tabBarStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  perTabStyle: {
    width: 'auto',
    padding: 0,
    paddingTop: 16,
    paddingBottom: 13,
    marginRight: 24,
  },
  textTabLabel: focused => {
    return {
      color: focused ? '#020202' : '#8D92A3',
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
    };
  },
  content: {paddingHorizontal: 24},
});
