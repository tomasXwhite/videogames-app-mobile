import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { SearchBar } from 'react-native-elements';
import Details from "../Details/Index";
import { getGamesAction, resetGamesAction } from "../../redux/actions/videogames";
import { useSelector } from "react-redux";
import Card from "../Card";
import Sidebar from "../Sidebar";


const BaseHome = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const { games, loading, moreLoading, error, moreError, isListEnd } = useSelector((state) => state.videogames)
    const [page, setPage] = useState(1)

  
    useEffect(() => {

        bringGames()
        
        return(() => {
            resetGames()
        })

    }, [page])

    const resetGames = () => {
        dispatch(resetGamesAction())
    }

    const goToDetails = (id) => {
        navigation.navigate("Details", { id: id })
    }

    const bringGames = async () => {
        dispatch(getGamesAction(page))
    }

    const fetchMoredata = async () => {
        if (!isListEnd && !moreLoading) {
            setPage(page + 1)
        }
    }
    const renderEmpty = () => {
        return (
            <View>
                <Text>No data</Text>
                {/* <Button onPress={() => bringGames()}>Refresh</Button> */}
            </View>
        )
    }

    const renderHeader = () => {
        return (
            <View>
                <SearchBar
                    inputStyle={{ backgroundColor: 'white' }}
                    containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5, marginHorizontal: 5, marginTop: 10 }}
                    inputContainerStyle={{ backgroundColor: 'white' }}
                    placeholderTextColor={'#g5g5g5'}
                    placeholder={'Search a game'}
                />
            </View>
        )
    }



    const renderFooter = () => {
        return (
            <View
                style={{
                    paddingVertical: 3,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                {moreLoading && <ActivityIndicator animating size="large" />}
                {isListEnd && <Text> No more videogames for today :c</Text>}
            </View>
        );
    };

/*  */

    return (
        <View >
            {
                loading ?
                <View style={styles.loadingContainer}><ActivityIndicator size='large' /></View>
                :
                <FlatList
                
                data={games}
                renderItem={({ item }) => {
                            return (item !== undefined ?
                                <View style={styles.tag}>
                                    <Card
                                        title={item.name}
                                        description={`rating: ${item.rating}`}
                                        id={item.id}
                                        imageUrl={item.background_image}
                                        onPress={() => goToDetails(item.id)}
                                        key={item.id}
                                    />
                                </View>
                                : null
                            )
                        }}
                        contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 16 }}
                        numColumns={2}
                        columnWrapperStyle={styles.tagView}
                        onEndReached={() => fetchMoredata()}
                        keyExtractor={game => game.id}
                        ListFooterComponent={renderFooter}
                        ListHeaderComponent={renderHeader}
                        ListEmptyComponent={renderEmpty}
                        onEndReachedThreshold={0.5}
                    />
            }
        </View>
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


export default BaseHome