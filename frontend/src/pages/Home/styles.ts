import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        width: '100%',
    },
    addButao: {
        position: 'relative',
        left: '50%',
        backgroundColor: '#0cb34c',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 50,
        height: 50,
    },
    textoHeader: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    textoBotao: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
    },
    content: {
        width: '90%',
    },
    especie: {
        backgroundColor: '#f1ecec',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
        padding: 10,
        marginBottom: 20,
        height: 110,
    },
    nomeEspecie: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        textAlign: 'center',
    },
    status: {
        fontSize: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 4,
        marginTop: 5,
        fontStyle: 'italic',
    },
});

export default styles;