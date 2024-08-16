/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// 修复 waiting for client connection
import {DevSettings, NativeModules} from 'react-native';

const addDebugMenuItems = async () => {
  const message = {
    stop: '(*) Stop Debugging',
    debug: '(*) Debug JS Remotely',
  };

  DevSettings.addMenuItem(message.debug, () => {
    NativeModules.DevSettings.setIsDebuggingRemotely(true);
  });
  DevSettings.addMenuItem(message.stop, () => {
    NativeModules.DevSettings.setIsDebuggingRemotely(false);
  });
};

export const enableDebugging = async () => {
  setTimeout(addDebugMenuItems, 100);
};


import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      <View>
        <Text>Hello World</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
