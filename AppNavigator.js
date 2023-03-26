import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/common/OnboardingScreen';
import Welcome from './src/screens/common/WelcomePage';
import Signin from './src/screens/doctor/auth/Signin';
import SignUp from './src/screens/doctor/auth/Signup';
import PaientSignin from './src/screens/patient/auth/Signin'
import PaientSignup from './src/screens/patient/auth/Signup'
const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoard" component={OnboardingScreen} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="DoctorSignin" component={Signin} />
                <Stack.Screen name="DoctorSignup" component={SignUp} />
                <Stack.Screen name="PatientSignin" component={PaientSignin} />
                <Stack.Screen name="PatientSignup" component={PaientSignup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator
