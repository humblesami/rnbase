// screens/UserScreen.js

import React, { Component } from 'react';
import EditStyles from './styles';
import NavButton from '../navigation/navbutton';
import { StyleSheet, ScrollView, ActivityIndicator, Text, View } from 'react-native';


class SettingScreen extends Component {

    constructor(received) {
        super();
        this.state = {
            isLoading: true,
            objects_list: [],
            error: ''
        };
        //console.log(received.route.params, 1112);
    }

    componentDidMount() {
        let obj_this = this;
        this.focusListener = this.props.navigation.addListener('focus', () => {
            obj_this.getData();
        });
    }

    getData(){
        let obj_this = this;

        // apiClient.get_data('/user-list', {a:1, b:2}).then(function(res){
        //     // console.log("response", res);
        //     if(res.status == 'error'){
        //         obj_this.setState({ error: res.data, isLoading: false });
        //     }
        //     else{
        //         obj_this.setState({ objects_list : res.data, isLoading: false});
        //     }
        //     // console.log(res.data);
        // }).catch((err) => {
        //     obj_this.setState({ error: 'Error in request '+err, isLoading: false });
        // });

        obj_this.setState({ error: 'No data to show', isLoading: false });
    }

    render() {
        let obj_this = this;
        if (this.state.isLoading) {
            return (
                <View style={EditStyles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }

        let error_message = obj_this.state.error;
        return (
            <ScrollView style={EditStyles.page}>
                <NavButton txt="Add New" onPress={() => obj_this.props.navigation.navigate('SettingUpdate')} />
                <View style={EditStyles.messageOnly}>
                    <Text>{error_message}</Text>
                </View>
                {
                    obj_this.state.objects_list.map((item, i) => {
                        item.mobile = item.mobile ? item.mobile : item.phone;
                        return (
                            <View
                                key={item.id}
                                bottomDivider
                                title={item.name}
                                subtitle={item.email}
                                onPress={() => {
                                    obj_this.props.navigation.navigate('SettingUpdate', item);
                                }}
                            >
                                <Text>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        );
    }
}

export default SettingScreen;