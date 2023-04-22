import React, {useState} from 'react';
import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';

type Props = {
  image: string;
  category: string;
  title: string;
  price: number;
  description: string;
};

const ProductCard = ({image, category, title, price, description}: Props) => {
  const [count, setCount] = useState(1);

  return (
    <View className={'w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5'}>
      <View className="bg-white rounded-xl">
        <Image source={{uri: image}} className={'w-full h-72'} />
      </View>
      <View className="mt-5">
        <Text className={'text-sm text-black/60 dark:text-white/70'}>
          {category}
        </Text>
        <Text className={'text-lg font-semibold dark:text-white'}>{title}</Text>
        <View className={'flex-row justify-between items-center my-3'}>
          <View className={'flex-row items-center gap-3'}>
            <Pressable onPress={() => setCount(count - 1)}>
              <Text className="dark:text-white text-2xl font-semibold">-</Text>
            </Pressable>

            <Text className={'text-xl dark:text-white'}>{count}</Text>

            <Pressable onPress={() => setCount(count + 1)}>
              <Text className="dark:text-white text-2xl font-semibold">+</Text>
            </Pressable>
          </View>
          <Text className={'text-2xl font-extrabold dark:text-white'}>
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className={'text-sm text-black/60 dark:text-white/70'}>
          {description}
        </Text>
        <TouchableOpacity className="flex-row justify-center rounded-full bg-black/90 dark:bg-white/90 p-3 w-10/12 self-center mt-5">
          <Text className="text-white dark:text-black font-bold">
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
