import { useEffect } from "react"
import { View } from "react-native"
import Carrusel from "./Carrusel"

const Details = ({ navigation , route }) => {

    const mockArray = [
        "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg",
        "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg",
        "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg",
        "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg",
        "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
    ]

    
    return <View>
        <Carrusel content={mockArray}/>
    </View>
}

export default Details