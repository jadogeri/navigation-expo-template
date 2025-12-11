import React, { //useContext ,
     useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './DrawerContentStyles';
import { useAppContext } from '../contexts/ThemeContext';

//import { Context as AuthContext } from '../../context/AuthContext'
// import useToggleTheme from '../../hooks/useTheme';

// import { signOut } from "firebase/auth";
// import { signOut } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth } from 'firebase/auth';

// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from '../../config/firebase';

// const value = initializeApp(firebaseConfig)
// console.log(value)
 const DrawerContent = (props: any) => {
      const { state: appState, toggleTheme } = useAppContext();

    //const [toggleTheme, themeState] = useToggleTheme();
    //const {isDarkTheme} = themeState;

    // console.log("theme state in drawer",JSON.stringify(themeState))
    //const [isDarkTheme,setIsDarkTheme]=useState(false);
    // const toggleTheme = () =>{
    //     setIsDarkTheme(!isDarkTheme);
    // }
    //const { state,signout } = useContext(AuthContext);
    //const { username, email, id } = state
    const paperTheme = useTheme();
    // const auth = getAuth();
    // const sign_out = ()=>{

    //     signOut(auth)
    //     .then(()=>{AsyncStorage.clear();
    //                alert("user signed out")})
    //     .catch((e)=> alert(e))
    //    //navigation.navigate("Login")
    // //    alert(typeof signOut);
    // //    alert(signOut === undefined ? "yes":"no")
      
    // }

    return <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props} >
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }}
                            size={50}
                        />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            {/* <Title style={styles.title}>username === {username}</Title> */}
                            <Caption style={styles.caption}>@j_doe</Caption>
                            {/* <Caption style={styles.caption}>email === {email}</Caption>
                            <Caption style={styles.caption}>id === {id}</Caption> */}


                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => { props.navigation.navigate('HomeDrawer') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="person-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => { props.navigation.navigate('ProfileDrawer') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="ChatRoom"
                        onPress={() => { props.navigation.navigate('SettingsDrawer') }}
                    />
                    
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="settings-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => { props.navigation.navigate('SettingsDrawer') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="help-circle-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => { props.navigation.navigate('SettingsDrawer') }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => { //alert("pressing toggle");
                     toggleTheme();
                    }}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={appState.isDark} />
                           
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({ color, size }) => (
                    <Icon
                        name="exit-outline"
                        color={color}
                        size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => { //sign_out() 

                }}
            />
        </Drawer.Section>
    </View>
}



export default DrawerContent