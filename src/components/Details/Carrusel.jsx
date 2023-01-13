import { useEffect, useRef } from "react"
import { FlatList, View, Image } from "react-native"



let currentSlide = 2.5
let IntervalTime = 4000;

const Carrusel = () => {

    const refContainer = useRef(null);
    
    const goToNextPage = () => {
    
        refContainer.current.scrollToIndex({
          index: currentSlide += 1,
          animated: true,
        });
    };

    useEffect(() => {
        let int = setInterval(goToNextPage, IntervalTime);
        return (() => {
            clearInterval(int)
        })
    }, [])




    const mockArray = [
        "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg",
        "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg",
        "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg",
        "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg",
        "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg",
        "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg",
        "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg"
    ]

    const goToFirst = () => {
        currentSlide = 0.5
        refContainer.current.scrollToIndex({ animated: false, index: 0.1 })
        refContainer.current.scrollToIndex({ animated: true, index: 0.5 })
    }

    return <View>
        <FlatList 
            ref={refContainer}
            horizontal={true} 
            data={mockArray} 
            renderItem={({item}) => {
                return <Image source={{uri: item}} style={{width: 200, height: 200, margin: 10 }}/>
            }}
            initialScrollIndex={2.5}
            onEndReached={goToFirst}
            showsHorizontalScrollIndicator={false}            
        />
    </View>
}


export default Carrusel