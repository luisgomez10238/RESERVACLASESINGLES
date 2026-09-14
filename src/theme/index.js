import { Platform } from 'react-native';

export const colors = {
    fondo: '#f9f9f9',
    primary: '#b336c3',
    texto: '#1e1e21',
    borde: '#afabab',
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
};

export const typography = {
    titulo: {fontSize: 28, fontWeight: '800', color: colors.texto},
    subtitulo: {fontSize: 18, fontWeight: '600', color: colors.texto},
    parrafo: {fontSize: 16, fontWeight: '400', color: colors.texto},
    boton: {fontSize: 18, fontWeight: '500', color: colors.fondo},
};

export default {
    colors,
    spacing,
    typography
};