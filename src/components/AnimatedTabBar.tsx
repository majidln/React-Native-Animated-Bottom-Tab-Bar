import React, { FC, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const BAR_HEIGHT = 80;

const MyTabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const activeIconRef = useRef(new Animated.Value(0)).current;

  const changeTab = (index: number) => {
    Animated.timing(activeIconRef, {
      duration: 0.5 * 1000,
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    changeTab(0);
  }, []);

  return (
        <View style={{ flexDirection: 'row', height: BAR_HEIGHT }}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                    options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                        ? options.title
                        : route.name;

              const Icon = options.tabBarIcon;

              console.log('options', options, Icon);

              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true
                });

                if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true });
                }
                // reset the animated ref
                activeIconRef.setValue(0);

                changeTab(index);
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key
                });
              };

              const translateY = activeIconRef.interpolate({
                inputRange: [0, 1],
                outputRange: isFocused ? [0, -1 * (BAR_HEIGHT / 4)] : [1 * (BAR_HEIGHT / 4), 0]
              });

              //   const opacity = activeIconRef.interpolate({
              //     inputRange: [0, 1],
              //     outputRange: isFocused ? [0, 1] : [0, 1]
              //   });

              //   const TextTranslateY = activeIconRef.interpolate({
              //     inputRange: [0, 1],
              //     outputRange: isFocused ? [0, -1 * (BAR_HEIGHT / 4)] : [0, 0]
              //   });

              return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        // accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.itemWrapper}
                    >
                        <Animated.View style={[styles.innerWrapper]}>
                            <Animated.View style={[{ transform: [{ translateY }] }]}>
                                <Icon size={30} color={'darkblue'} />
                            </Animated.View>
                            <Animated.Text style={[styles.label, { color: 'darkblue' }]}>
                                {label}
                            </Animated.Text>
                            {/* <Animated.View style={[styles.circle, !isFocused ? { opacity } : {}]}>
                            </Animated.View> */}
                        </Animated.View>
                    </TouchableOpacity>
              );
            })}
        </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    paddingVertical: 10
  },
  innerWrapper: {
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    fontWeight: '900'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'black'
  }
});

export default MyTabBar;
