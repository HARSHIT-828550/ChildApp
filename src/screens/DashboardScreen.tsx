import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";

const { width } = Dimensions.get("window");

interface MenuItem {
  label: string;
  icon: string;
  color: string;
}

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const menuItems: MenuItem[] = [
    { label: "Child Admission", icon: "baby", color: "#4caf50" },
    { label: "Child Transfer", icon: "account-switch", color: "#3f51b5" },
    { label: "Attendance / Nutrition", icon: "food-apple", color: "#ff9800" },
    { label: "Child Hand Over", icon: "handshake", color: "#9c27b0" },
    { label: "Growth Monitoring", icon: "human-male-height", color: "#009688" },
    { label: "Immunization", icon: "needle", color: "#f44336" },
    { label: "Doctor Visit", icon: "stethoscope", color: "#673ab7" },
    { label: "Child Exit", icon: "exit-run", color: "#ff5722" },
    { label: "Mortality", icon: "alert-circle", color: "#d32f2f" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4fc3f7" />

      {/* Top Profile Section */}
      <LinearGradient colors={["#42a5f5", "#7e57c2"]} style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="school" size={28} color="#fff" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headerTitle}>ABC Creche Profile</Text>
            <Text style={styles.headerSub}>Danapur • 42 Children • Synced</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Dashboard Cards */}
      <ScrollView contentContainerStyle={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} activeOpacity={0.8}>
            <View style={[styles.iconWrap, { backgroundColor: item.color }]}>
              <MaterialCommunityIcons name={item.icon} size={28} color="#fff" />
            </View>
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <LinearGradient
        colors={["#4fc3f7", "#7a5cff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.bottomNav}
      >
        <NavItem
          label="Home"
          active={activeTab === "home"}
          icon={<Ionicons name="home-outline" size={22} color="#fff" />}
          onPress={() => setActiveTab("home")}
        />
        <NavItem
          label="Profile"
          active={activeTab === "profile"}
          icon={<FontAwesome5 name="user" size={20} color="#fff" />}
          onPress={() => setActiveTab("profile")}
        />
        <NavItem
          label="User"
          active={activeTab === "user"}
          icon={<Ionicons name="people-outline" size={22} color="#fff" />}
          onPress={() => setActiveTab("user")}
        />
        <NavItem
          label="Settings"
          active={activeTab === "settings"}
          icon={<Ionicons name="settings-outline" size={22} color="#fff" />}
          onPress={() => setActiveTab("settings")}
        />
      </LinearGradient>
    </View>
  );
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
  active: boolean;
}

function NavItem({ label, icon, onPress, active }: NavItemProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.navItem} activeOpacity={0.8}>
      <View style={[styles.navIconWrap, active && styles.navActiveIconWrap]}>
        {icon}
      </View>
      <Text style={[styles.navLabel, active && styles.navActiveLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSub: {
    fontSize: 13,
    color: "#e3f2fd",
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 16,
  },
  card: {
    width: width / 2.3,
    backgroundColor: "#fff",
    margin: 8,
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  iconWrap: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#003366",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navIconWrap: {
    marginBottom: 2,
  },
  navActiveIconWrap: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 6,
    borderRadius: 10,
  },
  navLabel: {
    color: "#eaf6ff",
    fontSize: 12,
  },
  navActiveLabel: {
    fontWeight: "700",
    color: "#fff",
  },
});
