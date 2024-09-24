import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], []);
  const renderBackDrop = useCallback((props: any) => {
    <BottomSheetBackdrop
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      {...props}
    />;
  }, []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      overDragResistanceFactor={0}
      handleIndicatorStyle={{ display: 'none' }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <Pressable style={styles.toggleActive}>
            <Text style={styles.textActive}>Delivery</Text>
          </Pressable>
          <Pressable style={styles.toggleInActive}>
            <Text style={styles.textInActive}>Pickup</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.textHeadModal}>Your Location</Text>
          <Link
            href={'/'}
            asChild
          >
            <Pressable>
              <View style={styles.item}>
                <Ionicons
                  style={styles.iconSubModal}
                  name='location-outline'
                  size={20}
                />
                <Text style={styles.textSubModal}>Current Location</Text>
                <Ionicons
                  name='chevron-down'
                  size={20}
                />
              </View>
            </Pressable>
          </Link>

          <Text style={styles.textHeadModal}>Overal Time</Text>
          <Link
            href={'/'}
            asChild
          >
            <Pressable>
              <View style={styles.item}>
                <Ionicons
                  style={styles.iconSubModal}
                  name='stopwatch-outline'
                  size={20}
                />
                <Text style={styles.textSubModal}>Now</Text>
                <Ionicons
                  name='chevron-down'
                  size={20}
                />
              </View>
            </Pressable>
          </Link>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => dismiss()}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </Pressable>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: { flexDirection: 'column', justifyContent: 'space-between' },
  toggle: { flexDirection: 'row', justifyContent: 'center', gap: 10, paddingBottom: 32 },
  toggleActive: { backgroundColor: Colors.primary, borderRadius: 32, padding: 10, paddingHorizontal: 20 },
  toggleInActive: { backgroundColor: '#fff', borderRadius: 32, padding: 10, paddingHorizontal: 20 },
  textActive: { color: '#fff', fontWeight: '700', fontSize: 16 },
  textInActive: { color: Colors.primary, fontWeight: '700', fontSize: 16 },
  textHeadModal: { margin: 16, fontWeight: '700', fontSize: 18 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  iconSubModal: {},
  textSubModal: { fontSize: 16, flex: 1 },
  button: { backgroundColor: Colors.primary, flexDirection: 'row', justifyContent: 'center', marginTop: 32, padding: 14 },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
