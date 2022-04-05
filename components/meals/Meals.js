import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/dummy-data';
import MealItem from './MealItem';

const Meals = ({ navigation, route }) => {
    
    const categoryId = route.params.categoryId;

    const meals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    })

    const renderMealItem = (itemData) => {
        return <MealItem item={itemData.item}/>
    }

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
        
        navigation.setOptions({
            title: categoryTitle,
        });

    }, [categoryId, navigation])

    return (
        <View style={styles.container}>
            <FlatList data={meals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default Meals;