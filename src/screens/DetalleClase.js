import { useState, useMemo, useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import useResponsive from "../hooks/useResponsive";
import {colors,spacing,sombra, typography,radius} from "../theme";
import { formatearPrecio } from "../data/clases";



export default function DetalleClase({route,navigation}){
    const insets =useSafeAreaInsets();
    const {clase}=route.params;
    const{isTable}=useResponsive();
   
    const [cupos, setCupos] = useState(clase.cupos);
    const  manejarReserva = () => {
        if (cupos > 0) {
            setCupos(cupos-1);
            Alert.alert("cupo reservado");
        }
        else{
             Alert.alert("no hay cupos disponibles");
        }
    };
   
    



    
    return(
        <View style={styles.pantalla}>
            <ScrollView
             contentContainerStyle={{paddingBottom:120}} 
             showsVerticalScrollIndicator={false}  
            >
                <Image
                    source={{uri:clase.imagen}}
                    style={[styles.portada,{height: isTable ? 300:200}]}
                    resizeMode="cover"
                />

                <View style={styles.contenido}>
                    <Text style={styles.titulo}>{clase.titulo}</Text>

                    <View style={styles.datos}>
                        <View style={styles.dato}>
                            <Text style={styles.datoValor}>{clase.duracion} min</Text>
                            <Text style={styles.datoTexto}>Duración</Text>
                        </View>

                        <View style={styles.dato}>
                            <Text style={styles.datoValor}>{cupos}</Text>
                            <Text>{cupos} cupos</Text>
                        </View>

                        <View style={styles.dato}>
                            <Text style={styles.datoValor}>{clase.modalidad}</Text>
                            <Text style={styles.datoTexto}>Modalidad</Text>
                        </View>
                    </View>

                    <View style={styles.seccion}>
                        <Text style={styles.subtitulo}>Profesor</Text>

                        <View style={styles.profesor}>
                            <Image source={{uri:clase.profesor.foto}} style={styles.avatar}/>
                            <View style={{flex:1}}>
                                <Text style={styles.profesorNombre}>{clase.profesor.nombre}</Text>
                                <Text style={styles.profesorTexto}>{clase.profesor.pais}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.seccion}>
                        <Text style={styles.subtitulo}>Descripción</Text>
                        <Text style={styles.descripcion}>{clase.descripcion}</Text>
                    </View>

                    <View style={styles.seccion}>
                        <Text style={styles.subtitulo}>Horarios</Text>

                        <View style={styles.horarios}>
                            {clase.horarios.map((horario,index)=>(
                                <View key={index} style={styles.horario}>
                                    <Text style={styles.horarioTexto}>{horario}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <View style={styles.seccion}>
                        <Text style={styles.subtitulo}>Precio</Text>
                        <Text style={styles.precioGrande}>{formatearPrecio(clase.precio)}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={[styles.barra,{paddingBottom: Math.max(insets.bottom, spacing.lg)}]}>
                <View>
                    <Text style={styles.precioLabel}>Precio</Text>
                    <Text style={styles.precio}>{formatearPrecio(clase.precio)}</Text>
                </View>

                <TouchableOpacity style={styles.boton} onPress={manejarReserva}>
                    <Text style={styles.botonTexto}>Realizar Reserva</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: colors.fondo },
  portada: { width: '100%', backgroundColor: colors.primarioSuave },
  contenido: { padding: spacing.lg, gap: spacing.lg },
  titulo: { fontSize: 24, fontWeight: '800', color: colors.texto },
  datos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
  },
  dato: { alignItems: 'center', gap: 2 },
  datoValor: { fontSize: 16, fontWeight: '800', color: colors.texto },
  datoTexto: { fontSize: 12, color: colors.textoSuave },
  seccion: { gap: spacing.sm },
  subtitulo: { fontSize: 18, fontWeight: '800', color: colors.texto },
  profesor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.borde },
  profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.texto },
  profesorTexto: { fontSize: 13, color: colors.textoSuave, marginTop: 2 },
  descripcion: { ...typography.cuerpo, color: colors.textoSuave, lineHeight: 22, marginTop: spacing.sm },
  horarios: { gap: spacing.sm },
  horario: {
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  horarioTexto: { fontSize: 15, color: colors.texto, fontWeight: '600' },
  precioGrande: { fontSize: 20, fontWeight: '800', color: colors.primario },
  barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.superficie,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  precioLabel: { fontSize: 12, color: colors.textoSuave },
  precio: { fontSize: 18, fontWeight: '800', color: colors.primario },
  boton: {
    backgroundColor: colors.primario,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  botonTexto: { color: '#ff0000', fontSize: 15, fontWeight: '800' },
});