import { View } from "react-native";

import TransactionItem from "../TransactionItem/TransactionItem";

export default function Transactions() {
  return <View className='py-4'>
    <TransactionItem />
    <TransactionItem />
    <TransactionItem />
    <TransactionItem />
    <TransactionItem />
  </View>
}