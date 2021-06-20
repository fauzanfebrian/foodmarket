import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardWrapper}>
            <Gap width={24} />
            {food.map(food => (
              <FoodCard
                image={{uri: food.picturePath}}
                key={food.id}
                name={food.name}
                rating={food.rate}
                onPress={() => navigation.navigate('FoodDetail', food)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <HomeTabSection />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FAFAFC'},

  cardWrapper: {flexDirection: 'row', marginVertical: 24},
  TabContainer: {flex: 1},
});
