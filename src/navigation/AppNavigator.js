import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BreedListScreen from '../screens/BreedListScreen';
import BreedDetailScreen from '../screens/BreedDetailScreen';
import SavedBreedsScreen from '../screens/SavedBreedsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#276453',
    background: '#F5F6F1',
    card: '#FFFFFF',
    text: '#182D25',
    border: '#DCE3DA',
  },
};

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: '#48594F',
        tabBarIconStyle: { display: 'none' },
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600', marginEnd: 0 },
      }}
    >
      <Tab.Screen
        name="Liste"
        component={BreedListScreen}
        options={{ headerTitle: 'Köpek Irkları (E–K)' }}
      />
      <Tab.Screen name="Kaydedilenler" component={SavedBreedsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Sekmeler" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="Detay"
          component={BreedDetailScreen}
          options={{ headerBackButtonDisplayMode: 'minimal', headerShadowVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
