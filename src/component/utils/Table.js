import { Text, View } from "@react-pdf/renderer"

export function Table(props) {
    const {row,column,sx,data} = props
    var index = 0;
    return(
        <View style={{display:'table',...sx}}>
            {
                Array(row).fill(0).map(i => (
                    <View style={{flexDirection:"row"}}>
                        {
                            Array(column).fill(0).map(e => (
                                <Cell value={data[index++]} align={'left'}/>
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

function Cell(props) {
    const {value,align} = props
    return(
        <View style={{flex:1}}>
            <Text style={{fontFamily:'Times-Roman',fontSize:'12pt',textAlign:align}}>{value}</Text>
        </View>
    )
}