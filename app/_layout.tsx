import CustomHeader from '@/components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen
            name='index'
            options={{ header: () => <CustomHeader /> }}
          ></Stack.Screen>
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
