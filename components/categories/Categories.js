import { FlatList } from 'react-native';
import { CATEGORIES } from '../../data/dummy-data';
import CategoryGridTile from './CategoryGridTile';

const Categories = ({ navigation }) => {
     
    const renderCategoryItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate('Meals', {
                categoryId: itemData.item.id
            });
        }

        return ( 
        <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={onPressHandler}
        />
        )
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default Categories;