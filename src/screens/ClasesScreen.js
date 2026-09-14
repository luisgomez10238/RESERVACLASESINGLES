import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, ScrollView, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import NivelFiltro from '../components/NivelFiltro';
import {colors, spacing, typography} from '../theme';
import {CLASES, NIVELES} from '../data/clases';


export default function ClasesScreen ({navigation })  {
    const insets = useSafeAreaInsets();
    const [nivelSeleccionado, setNivelSeleccionado] = useState('Todos');
    const [busqueda, setBusqueda] = useState('');
    
    return (
        <View style={{flex: 1, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right}}>
            <View style={styles.header}>
                <Text style={styles.titulo}> Aplicacion de clases de Ingles</Text>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={18} />
                    <TextInput
                        placeholder='Buscar por nivel o profesor'
                        value={busqueda}
                        onChangeText={setBusqueda}
                        autocorrect={false}
                        autoComplete={false}
                        style={styles.searchInput}
                    />
                    {busqueda.length > 0 && (
                        <Ionicons
                        name="close-circle"
                        size={18}
                        onPress={() => setBusqueda('')}
                        />
                    )}
                </View>
            </View>
            <ScrollView
                horizontal
                style={styles.categorias}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingRight: spacing.lg}}
            >
                {NIVELES.map(n => (
                    <NivelFiltro
                        key={n}
                        etiqueta={n}
                        activo={nivelSeleccionado === n}
                        onPress={() => setNivelSeleccionado(n)}
                    />
                ))}
            </ScrollView>
            <FlatList
                data={CLASES}
                renderItem={({ item }) => <Card clase={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{paddingHorizontal: spacing.lg}}
                scrollEnabled={true}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: spacing.xl,
        paddingBottom: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.borde,
    },
    titulo: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.texto,
        marginBottom: spacing.md,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: spacing.md,
        borderWidth: 1.3,
        borderColor: colors.borde,
    },
    searchInput: {
        flex: 1,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.sm,
        fontSize: 14,
    },
    categorias: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.borde,
        minHeight: 57,
    },
})
