import { Component } from 'react';
import apiClient from '../api';


class EditScreen extends Component {
    attributes = [];
    constructor(received) {
        super(received);
    }

    init_state(attributes, received_obj){
        let _self = this;
        this.state = {};
        this.attributes = attributes;
        this.attributes.forEach((prop)=>{
            _self.state[prop] = '';
        });
        if(received_obj && received_obj.id){
            this.attributes.forEach((prop)=>{
                _self.state[prop] = received_obj[prop];
            });
        }
    }

    store_data(endpoint, next_screen){
        let obj_this = this;
        this.setState({
            isLoading: true,
        });
        apiClient.post_data(endpoint, obj_this.get_state()).then((res) => {
            // console.log(res);
            if(res && res.status == 'success'){
                obj_this.reset_state();
                obj_this.props.navigation.navigate(next_screen, {q: new Date().toString()});
            }
            else{
                if(res && res.status == 'error'){
                    obj_this.setState({
                        error: res.data,
                        isLoading: false,
                    });
                }
            }

        }).catch((err) => {
            err = "Error: " + err;
            obj_this.setState({
                error: err,
                isLoading: false,
            });
        });
    }

    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    set_state(item){
        let json_obj = {};
        this.attributes.forEach((prop)=>{
            json_obj[prop] = item[prop];
        });
        this.setState(json_obj);
    }

    reset_state(){
        let json_obj = {};
        this.attributes.forEach((prop)=>{
            json_obj[prop] = '';
        });
        this.setState(json_obj);
    }

    get_state(){
        let json_obj = {};
        let item = this.state;
        this.attributes.forEach((prop)=>{
            json_obj[prop] = item[prop];
        });
        return json_obj;
    }
}



export default EditScreen;