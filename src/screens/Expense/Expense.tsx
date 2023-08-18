import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { CustomText, Input, DatePicker, RadioGroup, Button } from '@/components/ui';

export default function Expense() {
  const [radioValue, setRadioValue] = useState('0');

  return (
    <SafeAreaView className="flex-1 py-4 bg-light relative">
      <ScrollView className="flex-1 px-4 mb-14">
        <CustomText className="font-inter-bold text-lg mb-2">Total Expense</CustomText>
        <View style={{ gap: 16 }}>
          <Input keyboardType="decimal-pad" placeholder="Enter amount" />
          <DatePicker label="Date" />
          <RadioGroup
            orientation="horizontal"
            value={radioValue}
            onChange={setRadioValue}
            label="Transaction status"
          >
            <RadioGroup.Radio value="0" bordered>
              Settled
            </RadioGroup.Radio>
            <RadioGroup.Radio value="1" bordered>
              Not settled yet
            </RadioGroup.Radio>
          </RadioGroup>
          <Input placeholder="Enter the name of this transaction" label="Name" />
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 w-screen px-4 py-2 items-center">
        <Button>Save</Button>
      </View>
    </SafeAreaView>
  );
}
