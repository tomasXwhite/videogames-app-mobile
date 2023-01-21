import { useEffect, useRef } from "react"
import { FlatList, View, Image, Text, Dimensions } from "react-native"
import Carousel from "react-native-reanimated-carousel";



let currentSlide = 2.5
let IntervalTime = 4000;

const Carrusel = ({ content }) => {
    const width = Dimensions.get('window').width;



    return <View>
        <Carousel
            loop={true}
            width={width}
            height={width / 2}
            autoPlay={true}
            data={content}
            mode="parallax"
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
                <Image source={{uri: item}} style={{width: width, height: 200, borderRadius: 5, transform: [{scale:1.2}]}}/>
            )}
        />
    </View>
}


export default Carrusel