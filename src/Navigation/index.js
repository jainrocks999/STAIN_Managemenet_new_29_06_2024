import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/Auth/splash';
import HomeScreen from '../screens/Main/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import AboutStain from '../screens/Main/AboutStain';
import Support from '../screens/Main/Support';
import Video from '../screens/Main/Video';
import EditProfile from '../screens/Auth/EditProfile';
import StainChartDetail from '../screens/Main/StainChartDetail';
import Asyncstorage from '@react-native-async-storage/async-storage';

import StainChart from '../screens/Main/StainChart';
import Registration from '../screens/Auth/Registration';
import ChangePassword from '../screens/Auth/ChangePassword';
import About from '../screens/Main/About';
import SupportTwo from '../screens/Main/SupportTwo';
import Resource from '../screens/Main/Resource';
import HowTo from '../screens/Main/HowTo';
import SubScribeDetails from '../screens/Main/Subscribe';
import CaseStudyDetails from '../screens/Main/CaseStudyDetails';
import VideoList from '../screens/Main/VideoList';
import Recommendedsupply from '../screens/Main/Recommendedsupplies';
import TipPage from '../screens/Main/TipsPage';
import Notifications from '../screens/Main/Notifications';

const Stack = createStackNavigator();

function App() {
  //let Username = await AsyncStorage.getItem(storage.Username);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="Edit"
          component={EditProfile}
          options={{animationEnabled: false}}
        />
        <Stack.Screen name="Change" component={ChangePassword} />
        <Stack.Screen
          name="AboutStains"
          component={AboutStain}
          options={{animationEnabled: false}}
        />
        <Stack.Screen
          name="HowTo"
          component={HowTo}
          options={{animationEnabled: false}}
        />
        <Stack.Screen name="Subscribe" component={SubScribeDetails} />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{animationEnabled: false}}
        />
        <Stack.Screen
          name="Recommendedsupply"
          component={Recommendedsupply}
          options={{animationEnabled: false}}
        />
        <Stack.Screen
          name="TipPage"
          component={TipPage}
          options={{animationEnabled: false}}
        />
        <Stack.Screen
          name="VideoList"
          component={VideoList}
          options={{animationEnabled: false}}
        />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="StainChart" component={StainChartDetail} />
        <Stack.Screen
          name="Stain"
          component={StainChart}
          options={{animationEnabled: false}}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="CaseStudyDetails" component={CaseStudyDetails} />
        <Stack.Screen name="supportTwo" component={SupportTwo} />
        <Stack.Screen name="resource" component={Resource} />
        <Stack.Screen name="SubScribeDetails" component={SubScribeDetails} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
