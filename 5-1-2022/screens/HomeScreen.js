import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name="home" size={24} color="skyblue" />
            <Text>หน้าหลัก</Text>
            <Button
                title="Go to About"
                onPress={() =>
                    navigation.navigate("About", {
                        email: "Thititpong@gmail.com",
                    })
                }
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
