import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "./contants";

const DrawerContentScrollView = () => {
  return <View></View>;
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        {/* Close  */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
