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

 const DrawerContent = (props: any) => {
    const { state: appState, toggleTheme } = useAppContext();

    const paperTheme = useTheme();


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
                            <Title style={{...styles.title, color: appState.theme.colors.primary}}>John Doe</Title>
                            <Caption style={{...styles.caption, color: appState.theme.colors.text}}>@j_doe</Caption>
                            {/* <Caption style={styles.caption}>johndoe@gmail.com</Caption> */}

                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption,{color: appState.theme.colors.text}]}>80</Paragraph>
                            <Caption style={[styles.caption, {color: appState.theme.colors.text}]}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption,{color: appState.theme.colors.text}]}>100</Paragraph>
                            <Caption style={[styles.caption,{color: appState.theme.colors.text}]}>Followers</Caption>
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
                                name="chatbox-ellipses-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="ChatRoom"
                        onPress={() => { props.navigation.navigate('ChatDrawer') }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="people-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Friends"
                        onPress={() => { props.navigation.navigate('FriendsDrawer') }}
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
                        onPress={() => { props.navigation.navigate('SupportDrawer') }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => { //alert("pressing toggle");
                     toggleTheme();
                    }}>
                        <View style={styles.preference}>
                            <Text style={{color: appState.theme.colors.text}}>
                                {appState.isDark? "Dark Theme": "Light Theme"}
                            </Text>
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