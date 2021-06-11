import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Gap, ItemListFood} from '../..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const InProgress = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        type="in-progress"
        price="180.000"
        items={15}
      />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy2}
        type="in-progress"
        price="180.000"
        items={15}
      />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy3}
        type="in-progress"
        price="180.000"
        items={15}
      />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy4}
        type="in-progress"
        price="180.000"
        items={15}
      />
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy4}
        type="past-orders"
        time="Mei 2, 09:00"
        price="180.000"
        items={15}
      />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy3}
        type="past-orders"
        time="Mei 2, 09:00"
        price="180.000"
        items={15}
      />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        type="past-orders"
        time="Mei 2, 09:00"
        status="Cancelled"
        price="180.000"
        items={15}
      />
      <ItemListFood
        name="Sop Buntut"
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy2}
        type="past-orders"
        time="Mei 2, 09:00"
        status="Canceled"
        price="180.000"
        items={15}
      />
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
