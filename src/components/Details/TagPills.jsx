import { StyleSheet, Text, TouchableOpacity } from "react-native"

const TagPills = ({ tag }) => {
    return <TouchableOpacity style={styles.tagText}>
        <Text style={styles.tagButton}>{tag}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    tagText:{
        display:"flex",
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        padding:4,
        marginHorizontal:4,
        minWidth:30

    },
    tagButton:{
        fontSize:8,
        fontWeight:"600",
    }
  });


export default TagPills