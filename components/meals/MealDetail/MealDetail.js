import { useLayoutEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Button } from 'react-native';
import { MEALS } from '../../../data/dummy-data';
import FavoriteIcon from './FavoriteIcon';
import List from './List';
import MealInfo from './MealInfo';
import SubTitle from './Subtitle';

const MealDetail = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const addFavoriteHandler = () => {
         
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <FavoriteIcon onPress={addFavoriteHandler} />
            }
        })
    }, [navigation, addFavoriteHandler])

    return (
        <ScrollView style={{ marginBottom: 32 }}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View>
                <MealInfo 
                    duration={selectedMeal.duration} 
                    affordability={selectedMeal.affordability} 
                    complexity={selectedMeal.complexity}
                    textStyle={styles.textColor}
                />
            </View> 
            <View style={{ alignItems: 'center' }}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>             
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    textColor: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    }
})

export default MealDetail;