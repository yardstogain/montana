import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { supabase } from "../../initSupabase";
import { AuthStackParamList } from "../../types/navigation";
import { StackScreenProps } from "@react-navigation/stack";
import { Layout, Text, TextLink, TextInput, Button } from "../../components";

export default function ({
  navigation,
}: StackScreenProps<AuthStackParamList, "Register">) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function register() {
    setLoading(true);
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (!error && !user) {
      setLoading(false);
      alert("Check your email for the login link!");
    }
    if (error) {
      setLoading(false);
      alert(error.message);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("../../../assets/images/register.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 16,
              paddingBottom: 24,
            }}
          >
            <Text h3 style={{ textAlign: "center", marginBottom: 16 }}>
              Register
            </Text>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              leftIcon={{ type: "ionicons", name: "email" }}
            />
            <TextInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              leftIcon={{ type: "ionicons", name: "lock" }}
            />
            <Button
              title={loading ? "Loading" : "Create an account"}
              onPress={() => {
                register();
              }}
              loading={loading}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 24,
                justifyContent: "center",
              }}
            >
              <Text>Already have an account?</Text>
              <TouchableOpacity
                style={{ marginLeft: 8 }}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <TextLink>Login here</TextLink>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}
