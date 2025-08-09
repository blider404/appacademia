import React from "react";
import {View, Text, Flatlist} from 'react-native';

const treinos = [
    {dia: 'Segunda', grupo: 'Peito e triceps'},
    {dia: 'Terça', grupo: 'Costas e biceps'},
    {dia: 'Quarta', grupo: 'Perna'},
];
export default function HomeScreen(){
    return(
        <View style={{ padding:20 }}>
            <Text style={{ fontSiza:24, fontWeight:'bold'}}>Treino da Semana</Text>
            <Flatlist
                data={treinos}
                keyExtractor={(item) => item.dia}
                renderItem={({item}) => (
                    <View style={{marginVertical: 10}}>
                        <Text style={{ fontSize: 18}}>{item.dia} - {item.grupo}</Text>
                    </View>
                )}
                />
        </View>
    );
}