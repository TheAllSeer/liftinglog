import AppHeader from "@/components/AppHeader";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar"; 
import styles, {trademarks} from '@/styles/general';

export default function RootLayout() {
    return <SafeAreaView style={[styles.base, {flex:1}]}>
      <StatusBar 
        style="light"         
        translucent={true} 
      />
      <AppHeader />
      <Stack screenOptions={{ headerShown: false }} /> 
    </SafeAreaView>
}