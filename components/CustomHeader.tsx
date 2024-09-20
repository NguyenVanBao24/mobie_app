import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from './BottomSheet';

const SearchBar = () => {
  return (
    <View style={styles.containerSearch}>
      <View style={styles.search}>
        <Ionicons
          name='search-outline'
          style={styles.searchIcon}
          size={24}
        />
        <TextInput
          style={styles.input}
          placeholder='Restaurants, dishes, ...'
        />
      </View>

      <Ionicons
        style={styles.optionIcon}
        name='options-outline'
        size={24}
        color={Colors.primary}
      />
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef?.current?.present();
  };
  return (
    <SafeAreaView style={styles.areaSafe}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.headerContainer}>
        <Pressable>
          <Image
            source={require('@/assets/images/bike.jpeg')}
            style={styles.bike}
          />
        </Pressable>
        <Pressable
          style={styles.titlesContainer}
          onPress={openModal}
        >
          <View>
            <Text style={styles.title}>Delivery - Now</Text>
            <View style={styles.iconTitle}>
              <Text style={styles.subTitles}>Selected location</Text>
              <Ionicons
                name='chevron-down'
                size={24}
                color={Colors.primary}
              />
            </View>
          </View>
        </Pressable>
        <Pressable style={styles.containerProfile}>
          <Ionicons
            name='person-outline'
            style={styles.personalProfile}
            color={Colors.primary}
            size={24}
          />
        </Pressable>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  areaSafe: { flex: 1, backgroundColor: '#fff' },
  headerContainer: { backgroundColor: '#fff', height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, gap: 16 },
  bike: { height: 50, width: 50, borderRadius: 50 },
  titlesContainer: { flex: 1 },
  title: { fontSize: 16, color: Colors.medium },
  iconTitle: { flexDirection: 'row' },
  subTitles: { fontSize: 18, fontWeight: '700' },
  containerProfile: { padding: 10, backgroundColor: '#fff', borderRadius: 50 },
  personalProfile: {},
  containerSearch: { backgroundColor: '#fff', height: 60, flexDirection: 'row', padding: 20, justifyContent: 'space-between', alignItems: 'center', gap: 16 },
  search: { flex: 1, backgroundColor: Colors.lightGrey, flexDirection: 'row', alignItems: 'center', borderRadius: 8 },
  searchIcon: { paddingHorizontal: 10 },
  input: { flex: 1, color: Colors.mediumDark, padding: 20 },
  optionIcon: {},
});
