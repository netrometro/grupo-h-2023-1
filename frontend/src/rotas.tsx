import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Novo from "./pages/Novo";
import NovoOuEditar from "./componentes/NovoOuEditar";
import { IndexProps } from "./services/PraticasService";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined
  Detalhes: IndexProps
  Novo: IndexProps | {}
}

const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Novo" component={NovoOuEditar} />
    </Stack.Navigator>
  )
};

export default Rotas;
