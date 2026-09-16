import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Reserva() {
    return (
        <View style={styles.pantalla}>
            <ScrollView>
                <Text style={styles.texto}>
                    Reserva Realizada
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
    },
    texto: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 40,
    },
});