import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import EtiquetaNivel from './EtiquetaNivel';
import { colors, spacing, typography } from '../theme';
import {CLASES} from '../data/clases'

export default function Card({ clase, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image source={{ uri: clase.imagen }} style={styles.imagen} />
            <View style={styles.contenido}>
                <EtiquetaNivel nivel={clase.nivel} />
                <Text style={styles.titulo}>{clase.titulo}</Text>
                <Text style={styles.nombreProfesor}>{clase.profesor.nombre}</Text>
                <Text style={styles.descripcion}>{clase.descripcion}</Text>
                <Text style={styles.precio}>${clase.precio}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: spacing.lg,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 2,
    },
    imagen: {
        width: '100%',
        height: 150,
    },
    contenido: {
        padding: spacing.md,
    },
    titulo: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.texto,
        marginBottom: spacing.sm,
    },
    nombreProfesor: {
        fontSize: 13,
        fontWeight: '500',
        color: '#6B7280',
        marginBottom: spacing.xs,
    },
    descripcion: {
        fontSize: 13,
        color: '#6B7280',
        marginBottom: spacing.md,
        lineHeight: 18,
    },
    precio: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary,
    },
})