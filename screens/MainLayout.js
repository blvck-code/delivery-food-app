import { View, Text } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const MainLayout = ({ drawerAnimationStyle }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        ...drawerAnimationStyle,
      }}>
      <Text>Main Laout</Text>
    </Animated.View>
  );
};

export default MainLayout;
