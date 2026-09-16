import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ClasesScreen from '../screens/ClasesScreen';
import DetalleClase from '../screens/DetalleClase';
import Reserva from '../components/Reserva';

const Stack = createNativeStackNavigator();

export default function ClasesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={ClasesScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DetalleClase"
                component={DetalleClase}
            />
            <Stack.Screen
                name="Reserva"
                component={Reserva}
            />
        </Stack.Navigator>
    )
}