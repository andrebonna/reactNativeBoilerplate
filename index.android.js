import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';
import App from './src/containers/App';

const store = createStore(reducers, applyMiddleware(thunk));

export default class reactNativeBoilerplate extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('reactNativeBoilerplate', () => reactNativeBoilerplate);
