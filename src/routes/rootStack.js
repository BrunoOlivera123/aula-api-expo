import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../telas/home';
import Login from '../telas/login';
import CadUsuario from '../telas/cadUsuario';
import RecSenha from '../telas/recSenha';
import MyTabs from './myTabs';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="login"
      screenOptions={
        {
          headerStyle: {
            backgroundColor: '#4169E1',
            fontWeight: 'bold',
          },
        }
      }
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: 'Pagina de login' }}
      />
      <Stack.Screen
        name="home"
        component={MyTabs}
        options={{
          title: 'Pagina inicial',
          headerShown: false
          }
        }
      />
      <Stack.Screen
        name="cadUsuario"
        component={CadUsuario}
        options={{ title: 'Cadastro de usuario' }}
      />
      <Stack.Screen
        name="recSenha"
        component={RecSenha}
        options={{
          title: 'Recuperar senha',
          headerStyle: {
            backgroundColor: '#ff2828',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}