import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';
import {Gap} from '../../atoms';
import ItemListFood from '../ItemListFood';

const ContentTab = ({type}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste, popular, recommended} = useSelector(
    state => state.homeReducer,
  );
  const data =
    type === 'new_food'
      ? newTaste
      : type === 'popular'
      ? popular
      : type === 'recommended'
      ? recommended
      : null;

  useEffect(() => {
    dispatch(getFoodDataByTypes(type));
  }, []);
  return (
    <ScrollView style={styles.content}>
      <Gap height={8} />
      {data &&
        data.map(item => (
          <ItemListFood
            key={item.id}
            type="product"
            name={item.name}
            price={item.price}
            rating={item.rate}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        ))}
    </ScrollView>
  );
};

export default ContentTab;

const styles = StyleSheet.create({
  content: {paddingHorizontal: 24},
});
