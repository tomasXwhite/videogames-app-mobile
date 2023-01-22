import { FlatList, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { useSelector } from "react-redux"
import Card from "../Card"

const FavoriteScreen = ({ navigation, route }) => {

    const { favorites } = useSelector((state) => state.favorites)

    const renderEmpty = () => {
        return <View>
            <Text>ESTA VACIOS ESTO</Text>
        </View>
    }

    return (
        <FlatList
            data={favorites? favorites : []}
            renderItem={({ item }) => {
                return (item !== undefined ?
                    <View style={styles.tag}>
                        <Card
                            title={item.title}
                            description={`rating: ${item.description}`}
                            id={item.id}
                            imageUrl={item.imageUrl}
                            key={item.id}
                            isFavorite={true}
                            navigation={navigation}
                        />
                    </View>
                    : null
                )
            }}
            contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 16 }}
            numColumns={2}
            columnWrapperStyle={styles.tagView}
            ListEmptyComponent={renderEmpty}
        />
    )
}



const styles = StyleSheet.create({
    tagView: {
        flexWrap: "wrap"
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 150
    },
})

export default FavoriteScreen