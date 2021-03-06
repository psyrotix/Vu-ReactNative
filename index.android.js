/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Navigator,
    Animated
} from 'react-native';
import Login from './components/android/login.android.js';
import Loading from './components/android/loading.android.js';
class Vu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            isMainScreen: true,
        }
        // BackAndroid.addEventListener('hardwareBackPress', function() {
        //     if (!this.isMainScreen) {
        //         this.goBack();
        //         return true;
        //     }
        //     return false;
        // });
    }
    componentDidMount() {
        this.setState({loaded: true});
    }
    componentWillMount(){


    }


    renderScene (route, navigator) {
        const Component = route.component;
        console.log(navigator.getCurrentRoutes());
        return (
            <View style={{flex: 1}}>
                <Component navigator={navigator} route={route} name={route.name} passProps={route.passProps}
                       onForward={() => {
                      var nextIndex = route.index + 1;
                      navigator.push({
                        name: 'Scene ' + nextIndex,
                        index: nextIndex,
                      });
                    }}
                           onBack={() => {
                      if (route.index > 0) {
                        navigator.pop();
                      }
                    }}/>
            </View>
        )

    }
    render() {
        if(this.state.loaded == false){
            return (
                <Loading></Loading>
            );
        }
        return (
            <Navigator
                initialRoute={{name: 'Login', component: Login, index: 0}}
                renderScene={(route, navigator) => this.renderScene(route, navigator)}

            />
        );
    }
}


AppRegistry.registerComponent('Vu', () => Vu);
