import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PraticasService, { IndexProps } from '../../services/PraticasService';
import { RootStackParamList } from '../../rotas';
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export default function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const [praticas, setpraticas] = useState<IndexProps[]>([]);
    const [carregando, setCarregando] = useState(false)

    async function carregarPraticas() {
        try {
            setCarregando(true);
            const response = await PraticasService.index();
            setpraticas(response);
        }
        finally {
            setCarregando(false);
        }

    }

    useEffect(() => {
        carregarPraticas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textoHeader}>Práticas Sustentáveis</Text>
                <TouchableOpacity style={styles.addButao} onPress={() => { navigation.navigate('Novo', {}) }}>
                    <Text style={styles.textoBotao}>+</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
            <ScrollView style={styles.content}
                refreshControl={<RefreshControl refreshing={carregando} onRefresh={carregarPraticas} />}
            >
                {praticas.map((pratica) => (
                    <TouchableOpacity style={styles.especie}
                        onPress={() => { navigation.navigate('Detalhes', pratica) }} key={pratica.id}>
                        <Text style={styles.nomeEspecie} numberOfLines={2}>{pratica.nome}</Text>
                        <Text style={styles.status}>{pratica.status ? 'Ativo': 'Inativo'}</Text>
                    </TouchableOpacity>
                ))
                }
            </ScrollView>
        </View>
    );
}


