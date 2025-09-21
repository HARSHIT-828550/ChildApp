import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Switch,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function LoginScreen({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secure, setSecure] = useState<boolean>(true);
  const [remember, setRemember] = useState<boolean>(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      navigation.replace("Dashboard"); // Navigate to Dashboard
    } else {
      Alert.alert("Error", "Invalid credentials ❌");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a11cb" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.inner}>
            <Text style={styles.title}>Mobile Creches</Text>
            <Text style={styles.subtitle}>Child Care Management System</Text>

           

            {/* Username */}
            <View style={styles.inputCard}>
              <Ionicons
                name="person-outline"
                size={22}
                color="#666"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            {/* Password */}
            <View style={styles.inputCard}>
              <MaterialIcons
                name="lock-outline"
                size={22}
                color="#666"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={secure}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setSecure(!secure)}>
                <Ionicons
                  name={secure ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="#666"
                  style={{ marginRight: 8 }}
                />
              </TouchableOpacity>
            </View>

            {/* Remember Me */}
            <View style={styles.rememberRow}>
              <Switch
                value={remember}
                onValueChange={setRemember}
                trackColor={{ false: "#aaa", true: "#6a11cb" }}
                thumbColor={remember ? "#fff" : "#888"}
              />
              <Text style={styles.rememberText}>Remember me on this device</Text>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.9}
            >
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>

            {/* Footer */}
            <View style={styles.footerRow}>
              <Text style={styles.link}>Forgot Password?</Text>
              <Text style={styles.link}>Need Help?</Text>
            </View>
            <Text style={styles.version}>Version 1.0</Text>
            <Text style={styles.secure}>🔒 Secure Login Protected</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4ff" },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inner: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 5,
  },
  title: { fontSize: 24, fontWeight: "700", color: "#333", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
  demoCard: {
    width: "100%",
    backgroundColor: "#2c3e50",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  demoTitle: { color: "#fff", fontWeight: "700", marginBottom: 8 },
  demoText: { color: "#fff", fontSize: 14 },
  inputCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f6fc",
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
  },
  inputIcon: { marginRight: 6 },
  input: { flex: 1, height: 50, fontSize: 16, color: "#000" },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  rememberText: { marginLeft: 8, color: "#444", fontSize: 14 },
  loginButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#ff758c",
    marginBottom: 20,
  },
  loginText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  link: { color: "#6a11cb", fontWeight: "600" },
  version: { color: "#888", fontSize: 12, marginBottom: 4 },
  secure: { color: "#444", fontSize: 12 },
});

export default LoginScreen;