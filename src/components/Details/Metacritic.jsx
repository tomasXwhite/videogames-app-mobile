import { View, Text, StyleSheet} from "react-native";
import { Surface } from 'react-native-paper';

const Metacritic = ({ metacritic }) => {

    
    if (metacritic >= 1 && metacritic<=40) {
        return(
    <View>
        <Surface style={[styles.surface, styles.bgbad]} elevation={4}>
        <Text style={styles.title}>Metacritic</Text>
        <Text style={styles.meta}>{ metacritic }</Text>
        </Surface>
        
    </View>
        )
    }else if (metacritic >= 41 && metacritic<=75) {
        return(
    <View>
        <Surface style={[styles.surface, styles.bgmid]} elevation={4}>
        <Text style={styles.title}>Metacritic</Text>
        <Text style={styles.meta}>{ metacritic }</Text>
        </Surface>
        
    </View>
        )
    }else if (metacritic >= 76 && metacritic<=100) {
        return(
        <View>
            <Surface style={[styles.surface, styles.bggood]} elevation={4}>
            <Text style={styles.title}>Metacritic</Text>
            <Text style={styles.meta}>{ metacritic }</Text>
            </Surface> 
        </View>)
    
    }else{
        return(
            <View>
            <Surface style={[styles.surface, ]} elevation={4}>
            <Text style={styles.title}>Metacritic</Text>
            <Text style={styles.meta}>N/A</Text>
            </Surface> 
        </View>
        )
    }
}

const styles = StyleSheet.create({
    surface: {
        margin: 5,
        alignItems: 'center',
        justifyContent:"space-evenly",
        width: 65,
        height: 50,
        borderRadius: 7,
      },
    title: {
        fontSize: 12,
        fontWeight: "600",
        color: "#141514",
    },
    meta: {
        fontSize: 22,
        fontWeight: "600",
        color: "#141514",
    },
    bgbad:{
        backgroundColor:"#D21717",
    },
    bgmid:{
        backgroundColor:"#D1AF17",
    },
    bggood:{
        backgroundColor:"#4FD117",
    },

})
export default Metacritic;