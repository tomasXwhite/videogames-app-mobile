import { Text, View } from "react-native"

const ReqText = ({ requirements, title, viewStyle, reqStyle, min }) => {

    let splittedReqs = requirements.split("\n")

    splittedReqs = splittedReqs.filter(e => e != 0)

    if(splittedReqs.length === 1){
        if(min){
            splittedReqs = ["Minimum:" , "Not Info Yet"]
        }else{
            splittedReqs = ["Recommended:" , "Not Info Yet"]
        }
    }

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
