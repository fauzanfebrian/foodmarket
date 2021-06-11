import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Gap, ItemListFood} from '../../';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';

const NewTaste = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy1}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy2}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy3}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy4}
      />
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy4}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy3}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy1}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy2}
      />
    </ScrollView>
  );
};
const Recommended = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy3}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy1}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy2}
      />
      <ItemListFood
        type="product"
        name="Kopi Tanjung"
        price="300.000"
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        image={FoodDummy4}
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

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      renderTabBar={props => <RenderTabBar {...props} />}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

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
