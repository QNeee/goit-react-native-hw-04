
import {
    Text,
    View,
    StyleSheet
} from "react-native";


const PostScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>PostScreen</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: {
        marginTop: 27
    }
})





export default PostScreen;