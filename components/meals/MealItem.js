import { View, Pressable, Text, StyleSheet, Platform, Image } from 'react-native';

const MealItem = ({item}) => {
    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => (pressed ? styles.buttonPressed : null)}
                // onPress={onPress}
            >                
                <View>
                    <Image style={styles.image} source={{uri: item.imageUrl}} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{item.duration}m</Text>
                    <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
                </View> 
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
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})

export default MealItem;