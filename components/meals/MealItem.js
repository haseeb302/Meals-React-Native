import { View, Pressable, Text, StyleSheet, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealInfo from './MealDetail/MealInfo';

const MealItem = ({item}) => {
    const navigation = useNavigation();
    
    const mealItemDetailNavigation = () => {
        navigation.navigate('MealDetail', {
            mealId: item.id,
        });       
    }    

    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                onPress={mealItemDetailNavigation}
            >                
                <View>
                    <Image style={styles.image} source={{uri: item.imageUrl}} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <MealInfo 
                    duration={item.duration} 
                    affordability={item.affordability} 
                    complexity={item.complexity}
                />
             </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    buttonPressed: {
        opacity: 0.8,
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,        
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },
})

export default MealItem;