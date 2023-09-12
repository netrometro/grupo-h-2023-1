import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import PraticasService, { IndexProps } from '../../services/PraticasService';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../rotas';

export default function Detalhes() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute();
    const { nome, beneficios, status, id } = route.params as IndexProps;

    async function deletar() {

        // async function deletarPratica() {
            try {
                await PraticasService.delete(`${id}`)
                navigation.navigate('Home');
            }
            catch (error) {
                console.log(error)
                Alert.alert(
                    "Erro ao deletar Prática Sustentável",
                    "Erro ao deletar Prática Sustentável!",
                    [
                        {
                            text: "Ok",
                            onPress: () => navigation.navigate('Home'),
                            style: "cancel"
                        },
                    ]
                );
            }
        // }

        // Alert.alert(
        //     "Deletar Prática sustentável",
        //     "Deseja mesmo deletar essa prática?",
        //     [
        //         {
        //             text: "Cancelar",
        //             style: "cancel"
        //         },
        //         {
        //             text: "Deletar", onPress: () => Alert.alert(
        //                 "Deletar Prática sustentável",
        //                 "Prática deletada com sucesso!",
        //                 [
        //                     {
        //                         text: "Ok",
        //                         onPress: () => { deletarPratica() },
        //                         style: "cancel"
        //                     },
        //                 ]
        //             )
        //         },
        //     ],
        // );
    }

    function editar() {
        navigation.navigate("Novo", route.params as IndexProps);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textoHeader}>{nome}</Text>
            </View>
            <Text style={styles.status}>{status ? 'Ativo' : 'Inativo'}</Text>
            <StatusBar style="auto" />
            <View style={styles.content} >
                <Text style={styles.descricao}>{
                    beneficios}</Text>
            </View>
            <View style={styles.footer} >
                <TouchableOpacity style={styles.butoes} onPress={() => deletar()}>
                    <Text style={styles.textoBotao}>Deletar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.butoes} onPress={() => editar()}>
                    <Text style={styles.textoBotao}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


