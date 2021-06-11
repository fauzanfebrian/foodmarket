import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {Gap, ItemListMenu} from '../..';

const Account = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={16} />
      <ItemListMenu label="Edit Profile" />
      <ItemListMenu label="Home Address" />
      <ItemListMenu label="Security" />
      <ItemListMenu label="Payments" />
    </ScrollView>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.content}>
      <Gap height={16} />
      <ItemListMenu label="Rate App" />
      <ItemListMenu label="Help Center" />
      <ItemListMenu label="Privacy & Policy" />
      <ItemListMenu label="Terms & Conditions" />
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

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'FoodMarket'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  return (
    <TabView
      renderTabBar={props => <RenderTabBar {...props} />}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      lazy
      style={{backgroundColor: 'white'}}
    />
  );
};

export default ProfileTabSection;

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
