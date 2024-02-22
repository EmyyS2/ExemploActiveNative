import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        const dados = {
            email: email,
            password: password,
        }
        console.log(dados);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain"
                source={require('../assets/images/user.png')} />
            <Text style={styles.title}>Login</Text>
            <View style={styles.card}>


                <TextInput style={styles.input} placeholder="E-mail:"
                    placeholderTextColor={"#392d69"}
                    onChangeText={(textEmail) => setEmail(textEmail)} />

                <TextInput style={styles.input} placeholder="Senha:"
                    placeholderTextColor={"#392d69"}
                    onChangeText={(textPassword) => setPassword(textPassword)} secureTextEntry/>

                <TouchableOpacity style={styles.button}
                    onPress={() => { login() }}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgetPassword}>Não possui conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b28dff'
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 20,
        marginTop: -150
    },
    card: {
        backgroundColor: '#bc98ff',
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgb(0,0,0,0.3)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#392d69',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#c5a3ff',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#c5a3ff'
    },
    button: {
        backgroundColor: '#996fd6',
        height: 40,
        borderRadius: 8,


    },
    buttonText: {
        color: '#392d69',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },
    forgetPassword: {
        color: '#f3eaf9',
        textAlign: 'center',
        marginTop: 10
    }

});
export default LoginScreen;