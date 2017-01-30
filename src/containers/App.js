import React, {Component} from 'react';

import {Scene, Router} from 'react-native-router-flux';

import Launch from './Launch';

export default class App extends Component {
    render(){
        return (
            <Router>
                <Scene key="root">
                    <Scene key="launch" component={Launch} title="Launch"/>
                </Scene>
            </Router>
        );
    }
}