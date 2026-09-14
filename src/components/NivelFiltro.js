import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

export default function NivelFiltro({ etiqueta, activo, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.chip,
                activo && styles.chipActivo,
                pressed && { opacity: 0.7 }
            ]}
            >
                <Text style={[styles.texto, activo && styles.textoActivo]}>{etiqueta}</Text>
        </Pressable>
    )
}

    const styles = StyleSheet.create({
    chip: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: 20,
        backgroundColor: '#d2c8c8',
        borderWidth: 1,
        borderColor: colors.borde,
        marginRight: spacing.sm,
    },
    chipActivo: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    },
    texto: { fontSize: 13, fontWeight: '600', color: '#6B7280' },
    textoActivo: { color: '#FFFFFF' },
});