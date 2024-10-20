import { Text, View, Button, SafeAreaView } from "react-native";
import { useNavigation, useRouter  } from "expo-router";
import React from "react";
import { useEffect } from "react";

import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react-native";



const SignOutButton = () => {
    const { signOut } = useAuthenticator();

    return (
        <View>
            <Button onPress={signOut} title='Sign Out' />
        </View>
    );
};


const LoginScreen = () => {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        const { signOut } = router.params || {};  // Extract signOut parameter if present
        console.log("I ran2")
        if (signOut) {
            console.log("I ran3")
            const { signOut } = useAuthenticator();
            signOut();
        }
    }, [router.params, navigation]); 


    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 30 }}>
                <SignOutButton />
            </View>
            <AuthenticatorContent navigation={navigation} />
            {/* <Button title="go to app" onPress={() => navigation.navigate("(tabs)")} /> */}
        </SafeAreaView>
    );
}

const AuthenticatorContent = ({ navigation }) => {
    const { authStatus } = useAuthenticator();

    useEffect(() => {
        if (authStatus === 'authenticated') {
            // Redirect to the desired screen after successful authentication
            navigation.navigate('(tabs)');
        }
    }, [authStatus, navigation]); // Add navigation to the dependency array

    return (
        <View>
            <Button title="go to app" onPress={() => navigation.navigate("(tabs)")} />
        </View>
    );
};

/*
style={{
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
}}
*/
export default withAuthenticator(LoginScreen);