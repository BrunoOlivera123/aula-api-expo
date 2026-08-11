import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../telas/Home'; 
import Login from '../telas/login';
import CadUsuario from '../telas/cadusuario';
import RecSenha from '../telas/recSenha';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name= "Login" component={Login} />
      <Stack.Screen name= "Home" component={HomeScreen} />
      <Stack.Screen name= "CadUsuario" component={CadUsuario} />
      <Stack.Screen name= "RecSenha" component={RecSenha} />
    </Stack.Navigator>
  );
}