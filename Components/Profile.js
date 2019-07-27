import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    Button,
    Platform,
    StatusBar,
    TouchableOpacity,
    AppRegistry,
    FlatList,
    ScrollView
} from 'react-native';

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
    { id: 1, imgSource: require('../assets/1.jpeg') },
    { id: 2, imgSource: require('../assets/1.jpeg') },
    { id: 3, imgSource: require('../assets/1.jpeg') },
    { id: 4, imgSource: require('../assets/1.jpeg') },
    { id: 5, imgSource: require('../assets/1.jpeg') },
    { id: 6, imgSource: require('../assets/1.jpeg') },
    { id: 7, imgSource: require('../assets/1.jpeg') },
    { id: 8, imgSource: require('../assets/1.jpeg') },
    { id: 9, imgSource: require('../assets/1.jpeg') },
    { id: 10, imgSource: require('../assets/1.jpeg') }
    // { id: 11, imgSource: require('../assets/1.jpeg') },
    // { id: 12, imgSource: require('../assets/1.jpeg') },
    // { id: 13, imgSource: require('../assets/1.jpeg') },
    // { id: 14, imgSource: require('../assets/1.jpeg') },
    // { id: 15, imgSource: require('../assets/1.jpeg') },
    // { id: 16, imgSource: require('../assets/1.jpeg') },
    // { id: 17, imgSource: require('../assets/1.jpeg') },
    // { id: 18, imgSource: require('../assets/1.jpeg') },
    // { id: 19, imgSource: require('../assets/1.jpeg') },
    // { id: 20, imgSource: require('../assets/1.jpeg') }
];
const centerImgData = Math.floor(imgData.length / 2);
let screenWidth = Dimensions.get('window').width;

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postText: "1000",
            Followers: "1000",
            Following: "1000",
            info: "Phan Gia Luong"
        };
    }

    render() {
        return (
            
            <View style={{
                //flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around'
            }}>
                {/* Icon */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 24
                }}>

                    <Ionicons name="ios-arrow-round-back" size={40} color="black" style={styles.iconArrowBack} />
                    <Ionicons name="ios-menu" size={40} color="black" style={styles.iconMenu} />
                </View>
                {/* End Icon */}

                {/* avatar */}
                <View style={styles.viewAvt}>
                    <Image source={require('../assets/1.jpeg')} style={styles.avatar} />
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.text}>{this.state.postText}</Text>
                        <Text>Posts</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.text}>{this.state.Followers}</Text>
                        <Text>Followers</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.text}>{this.state.Following}</Text>
                        <Text>Following</Text>
                    </View>
                </View>
                {/* End avatar */}

                {/* Information */}
                <View style={styles.info}>
                    <Text>{this.state.info}</Text>
                </View>
                {/* End Information */}

                {/* Button */}
                <View style={styles.buttonFMC}>
                    <TouchableOpacity style={styles.buttonFollow}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                        }}>

                            Follow
                              </Text>
                        <Ionicons name="ios-add-circle-outline" style={{ textAlign: 'center' }} size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonMessage}>
                        <Text style={{
                            textAlign: "center",
                            color: "white",
                        }}>

                            Message
                            </Text>
                        <Ionicons name="ios-mail" style={{ textAlign: 'center' }} size={20} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContact}>
                        <Text style={{
                            textAlign: "center",
                            color: "black",
                        }}>

                            Contact
                            </Text>
                        <Ionicons name="ios-contact" style={{ textAlign: 'center' }} size={20} />
                    </TouchableOpacity>

                </View>
                {/* End Button */}



                {/* scroll image */}
                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 12,
                            marginLeft: 10,
                            marginRight: 10,

                        }}
                    >

                        
                        <View style={{ flexDirection: 'column' }}>
                            {imgData.slice(0, centerImgData).map(item => {
                                return <Image key={item.id} source={item.imgSource} style={styles.image} />;
                            })}
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            {imgData.slice(centerImgData).map(item => {
                                return <Image key={item.id} source={item.imgSource} style={styles.image} />;
                            })}
                        </View>

                    </View>
                </ScrollView>
                {/* End scroll image */}

                {/* footer */}
                <View style={styles.footer}>
                    <Feather name="home" size={27} />
                    <Feather name="search" size={27} />
                    <Feather name="plus-square" size={27} />
                    <Feather name="heart" size={27} />
                    <Feather name="user" size={27} />
                </View>
                {/* end footer */}
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    iconMenu: {
        //alignSelf: 'flex-end',
        marginRight: 12,
    },
    iconArrowBack: {
        marginLeft: 12,
    },
    avatar: {
        //alignSelf: 'flex-start',
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewAvt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 12,
        marginLeft: 12,
        marginTop: 12,
        alignItems: 'center'
    },
    info: {
        marginLeft: 12,
        marginTop: 12
    },
    text: {
        marginTop: 24,
        fontWeight: "bold",
        fontSize: 20
    },
    buttonFMC: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 12,
        marginRight: 12,

    },
    buttonFollow: {
        borderRadius: 10,
        backgroundColor: FOLLOW_COLOR,
        width: 120,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonMessage: {
        borderRadius: 10,
        backgroundColor: SEND_MESSAGE_COLOR,
        width: 120,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonContact: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: 120,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: screenWidth / 2.2 + 3,
        height: 190,
        borderRadius: 10,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 2

    },
    footer: {
        //flex: 0.1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#f3f6fa',
        bottom: 0
      }
});

export default Profile;