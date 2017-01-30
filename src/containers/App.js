import React, {Component} from 'react';

import {View} from 'react-native';
import {Router, Route} from 'react-native-redux-router';

import Launch from './Launch';

export default class App extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <Router>
                    <Route name="launch" component={Launch} initial={true} hideNavBar={true} title="Launch"/>
                </Router>
            </View>
        );
    }
}