import React from 'react';
import {SafeAreaView, StatusBar, Switch, Text, View} from 'react-native';

import {useColorScheme} from 'nativewind';
import ProductList from './constants/productCategory/ProductList';

function Main(): JSX.Element {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black ">
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View className={'flex-row w-full gap-5 mt-4'}>
        <Text className="dark:text-white text-2xl font-bold">
          New collection
        </Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>

      <ProductList />
    </SafeAreaView>
  );
}

export default Main;
