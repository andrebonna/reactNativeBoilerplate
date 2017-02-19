import React, {Component} from 'react';
import {View, Text, Switch, TextInput} from 'react-native';
import {connect} from 'react-redux';

import ToastAndroid from '../components/native/ToastAndroid';

import styles from '../styles/launch';

import {toggleBoolean, changeText} from '../actions';

class Launch extends Component {

    componentDidMount() {
        ToastAndroid.show('Awesome', ToastAndroid.LONG);
    }

    render() {

        const {props} = this;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Switch value={props.profile.isOk} onValueChange={props.toggleBoolean}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={props.changeText}
                    value={props.text}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({profile: state.profile});

export default connect(mapStateToProps, {
    toggleBoolean,
    changeText
})(Launch);
