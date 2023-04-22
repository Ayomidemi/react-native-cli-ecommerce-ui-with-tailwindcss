/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React from 'react';
import {products} from '../products';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product: any) => product.id}
        renderItem={({item}) => <ProductCard {...item} />}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      />
    </View>
  );
};

export default ProductList;
