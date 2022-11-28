import {Federated, ScriptManager} from '@callstack/repack/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppRegistry, Platform} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

const devDomain = Platform.select({android: '10.0.2.2', default: 'localhost'});

ScriptManager.shared.setStorage(AsyncStorage);
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers: {
      mTravel: `http://${devDomain}:9001/[name][ext]`,
    },
  });

  // Try to resolve URL based on scriptId and caller
  const url = resolveURL(scriptId, caller);
  if (url) {
    return {
      url,
      cache: false, // For development
      query: {
        platform: Platform.OS,
      },
    };
  }
});

AppRegistry.registerComponent(appName, () => App);
