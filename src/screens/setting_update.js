import React from "react";
import EditStyles from './styles';
import EditScreen from './edit_screen';
import { Button, TextInput, ScrollView, ActivityIndicator, Text, View } from 'react-native';
import NavButton from '../navigation/navbutton';
import ErrorMessage from './ErrorMessage';


class SettingUpdateScreen extends EditScreen {
    constructor(received) {
        super(received);
        let attributes = ['id', 'name', 'mobile', 'email'];
        let received_obj = received.route.params;
        this.init_state(attributes, received_obj);
    }

    storeUser() {
        //this.store_data('/setting-update', 'Settings');
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
        return (
            <ScrollView style={EditStyles.page}>
                <View style={EditStyles.buttonWithText}>
                    <NavButton icon="mail" txt="Setting Home" onPress={() => obj_this.props.navigation.navigate('SettingHome')} />
                    <View style={{paddingTop: 10, paddingLeft:10}}>
                        <Text>User List</Text>
                    </View>
                </View>

                <ErrorMessage txt={obj_this.state.error} />
                <View style={EditStyles.inputGroup}>
                    <TextInput
                        placeholder={'Name'}
                        defaultValue={this.state.name}
                        onChangeText={(val) => this.inputValueUpdate(val, 'name')}
                    />
                </View>
                <View style={EditStyles.inputGroup}>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder={'Email'}
                        defaultValue={this.state.email}
                        onChangeText={(val) => this.inputValueUpdate(val, 'email')}
                    />
                </View>
                <View style={EditStyles.inputGroup}>
                    <TextInput
                        placeholder={'Mobile'}
                        defaultValue={this.state.mobile}
                        onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
                    />
                </View>
                <View style={EditStyles.button}>
                    <Button
                        title='Add User'
                        onPress={() => this.storeUser()}
                        color="#19AC52"
                    />
                </View>
            </ScrollView>
        );
    }
}
export default SettingUpdateScreen;