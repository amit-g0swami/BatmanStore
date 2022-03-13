import React from 'react'
import LottieView from "lottie-react-native";

export default function LoadingScreen() {
    return (
        <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
        />
    )
}
