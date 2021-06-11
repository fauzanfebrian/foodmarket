import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICHomeOn,
  ICHomeOff,
  ICOrderOff,
  ICOrderOn,
  ICProfileOff,
  ICProfileOn,
} from '../../../assets';

const Icon = ({label, isFocused}) => {
  switch ((label + '').toLowerCase()) {
    case 'home':
      return isFocused ? <ICHomeOn /> : <ICHomeOff />;
    case 'order':
      return isFocused ? <ICOrderOn /> : <ICOrderOff />;
    case 'profile':
      return isFocused ? <ICProfileOn /> : <ICProfileOff />;
    default:
      return <ICHomeOff />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
