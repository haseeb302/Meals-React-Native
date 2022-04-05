import { View, Text, StyleSheet } from 'react-native';

const SubTitle = ({children}) => {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',        
        textAlign: 'center',        
    },
    subTitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
    },
})

export default SubTitle;