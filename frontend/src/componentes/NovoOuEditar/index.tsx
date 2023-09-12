import { Text, View, TouchableOpacity, Alert, TextInput, Keyboard } from 'react-native';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import PraticasService, { UpdateProps } from '../../services/PraticasService';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../rotas';

type NovoOuEditarProps = {
    editar?: boolean;
} & UpdateProps;

export default function NovoOuEditar() {
    const route = useRoute();
     const params = route.params as NovoOuEditarProps
    const [nome, setNome] = useState(params?.nome);
    const [beneficios, setBeneficios] = useState(params?.beneficios);
    const [status, setStatus] = useState(params?.status);
    const [editar] = useState(params?.nome ? true : false);

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    navigation.setOptions({
        headerTitle: params?.nome ? 'Editar Prática Sustentável' : 'Criar Prática Sustentável',
    });

    async function salvarNovaPratica() {
        Keyboard.dismiss();
        try {
            const novaPratica = {
                nome,
                beneficios,
                status: true
            }
            const praticaCriada = await PraticasService.create(novaPratica);
            console.log(praticaCriada)
            Alert.alert(
                "Criar Prática Sustentável",
                "Prática Sustentável criada com sucesso!",
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate('Detalhes', praticaCriada),
                        style: "cancel"
                    },
                ]
            );
            
        }
        catch (error) {
            console.log(error)
            Alert.alert(
                "Erro ao criar Prática Sustentável",
                "Erro ao criar Prática Sustentável!",
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate('Home'),
                        style: "cancel"
                    },
                ]
            );
        }
    }

    async function salvarEdicao() {
        Keyboard.dismiss();
        const praticaEditada = {
            id: params.id,
            nome,
            beneficios,
            status: true
        }
        try {
            setNome(nome);
            setBeneficios(beneficios);
            await PraticasService.update(praticaEditada);
            Alert.alert(
                "Editar Prática Sustentável",
                "Prática Sustentável editada com sucesso!",
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate('Detalhes', praticaEditada),
                        style: "cancel"
                    },
                ]
            );
        }
        catch (error) {
            console.log(error)
            Alert.alert(
                "Erro ao editar Prática Sustentável",
                "Erro ao editar Prática Sustentável!",
                [
                    {
                        text: "Ok",
                        onPress: () => navigation.navigate('Home'),
                        style: "cancel"
                    },
                ]
            );
        }
    }

    function salvar() {
        if (editar) {
            salvarEdicao();
        }
        else {
            salvarNovaPratica();
        }
    }

    return (
        <View style={styles.container}>
            <Text>Nome</Text>

            <TextInput style={styles.inputNome}
                cursorColor={'#000'}
                placeholder={'Nome da prática sustentável'}
                onBlur={() => { Keyboard.dismiss() }}
                defaultValue={params.nome}
                multiline={true}
                value={nome}
                onChangeText={(t) => setNome(t)}
            />
            <Text>Benéficios</Text>

            <TextInput style={styles.inputDescricao}
                cursorColor={'#000'}
                placeholder={'Benefícios da prática sustentável'}
                multiline={true}
                defaultValue={params.beneficios}
                onBlur={() => { Keyboard.dismiss() }}
                onChangeText={(t) => setBeneficios(t)}
            />

            <View style={styles.footer}>
                <TouchableOpacity style={styles.butoes} onPress={() => salvar()}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


