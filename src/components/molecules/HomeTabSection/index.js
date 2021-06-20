import React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import ContentTab from './ContentTab';

const NewTaste = () => <ContentTab type="new_food" />;
const Popular = () => <ContentTab type="popular" />;
const Recommended = () => <ContentTab type="recommended" />;

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
