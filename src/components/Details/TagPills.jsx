import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TagPills = ({ tag }) => {
    return <TouchableOpacity style={styles.tagText}>
                <Text style={styles.tagButton}>{tag}</Text>
            </TouchableOpacity>
    
}

const styles = StyleSheet.create({
    tagText:{
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:3,
        backgroundColor: "#141514",

    },
    tagButton:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize:10,
        fontWeight:"600",
        color: "#EAF4F4",
        backgroundColor: "#141514",
    }
  });


export default TagPills