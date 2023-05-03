import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from "../constants";
import { MainLayout } from "../screens";
import Animated from "react-native-reanimated";

const Drawer = createDrawerNavigator();

const CustomerDrawerItem = ({ label, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}>
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.white,
        }}
      />
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.white,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* Close  */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile  */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />
          <View
            style={{
              marginLeft: SIZES.radius,
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body4,
              }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Item  */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <CustomerDrawerItem
            label={constants.screens.home}
            icon={icons.home}
          />
          <CustomerDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomerDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomerDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />
          {/* Line Divider  */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomerDrawerItem label="Track Your Order" icon={icons.location} />
          <CustomerDrawerItem label="Coupon" icon={icons.coupon} />
          <CustomerDrawerItem label="Settings" icon={icons.setting} />
          <CustomerDrawerItem label="Invite a Friend" icon={icons.profile} />
          <CustomerDrawerItem label="Help" icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}>
          <CustomerDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });
  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
      }}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout" component={MainLayout} />
        {(props) => (
          <MainLayout drawerAnimationStyle={animatedStyle} {...props} />
        )}
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
