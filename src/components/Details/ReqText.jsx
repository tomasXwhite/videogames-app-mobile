import { Text, View } from "react-native"

const ReqText = ({ requirements, title, viewStyle, reqStyle }) => {

    const splittedReqs = requirements.split("\n")
    const subTitle = splittedReqs.shift()

    return (
        <View style={viewStyle}>
            <Text style={title}>
                {subTitle}
            </Text>
            {splittedReqs.map(e => <Text style={reqStyle}>{e}</Text>)}
        </View>
    )
}


export default ReqText
