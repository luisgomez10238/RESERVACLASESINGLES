import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing } from '../theme'

export default function EtiquetaNivel({ nivel }) {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.texto}>{ nivel }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: spacing.lg,
        borderRadius: 30,
        backgroundColor: colors.primary,
        marginBottom: spacing.sm,
    },
    texto: {fontSize: 11, fontWeight: '700', letterSpacing: 0.3}

})

