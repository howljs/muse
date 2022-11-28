import {Federated} from '@callstack/repack/client';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Suspense} from 'react';
import Loading from '../components/Loading';
import {Popup} from '../screens';
import BottomTabs from './BottomTabs';
import {navigationRef} from './RootNavigation';
import {MiniAppType} from './types';

const Stack = createNativeStackNavigator();

const miniAppIds: MiniAppType[] = [{id: 'mTravel', module: './Root'}];

const MainNavigation = () => {
  const _renderScreen = ({id, module}: MiniAppType) => {
    const AppComponent = React.lazy(() => Federated.importModule(id, module));
    return (
      <Stack.Screen key={id} name={id} options={{headerShown: false}}>
        {props => (
          <Suspense fallback={<Loading />}>
            <AppComponent {...props} />
          </Suspense>
        )}
      </Stack.Screen>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        {miniAppIds.map(_renderScreen)}
        <Stack.Screen name="Popup" component={Popup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
