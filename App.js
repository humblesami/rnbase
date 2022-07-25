import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleFile: {},
        };
    }

    async selectOneFile() {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            let file_details = {};
            if(Array.isArray(res) && res.length){
                file_details = res[0];
            }
            this.setState({ singleFile: file_details });
        }
        catch (err) {
            //If user cancels document selection
            if (DocumentPicker.isCancel(err)) {
                alert('Canceled from single doc picker');
            }
            else {
                alert('Unknown Error: ' + JSON.stringify(err));
                //throw err;
            }
        }
    }

    getFileText(item) {
        return (
            <Text style={styles.text}>
                File Name: {item.name ? item.name : ''}
                {'\n'}
                Type: {item.type ? item.type : ''}
                {'\n'}
                File Size: {item.size ? item.size : ''}
                {'\n'}
                URI: {item.uri ? item.uri : ''}
                {'\n'}
            </Text>
        );
    };

    render() {
        let obj_this = this;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.button}
                    onPress={obj_this.selectOneFile.bind(this)}>
                    <Text style={{ marginRight: 10, fontSize: 19, color: 'white' }}> Pick one file </Text>
                    <Image
                        source={{
                            uri: 'https://img.icons8.com/offices/40/000000/attach.png',
                        }}
                        style={styles.imageIcon}
                    />
                </TouchableOpacity>
                {obj_this.getFileText(obj_this.state.singleFile)}
                <View style={{ backgroundColor: 'grey', height: 2, margin: 10 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    text: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        color: 'black',
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fd2ded',
        padding: 5,
    },
    imageIcon: {
        height: 20,
        width: 20,
        resizeMode: 'stretch'
    },
});