import { useState } from "react";

import { View } from "react-native";

import { CustomText, Input, DatePicker, RadioGroup } from "@/components/ui";

export default function Expense() {
  const [radioValue, setRadioValue] = useState("0");

  return (
    <View className="flex-1 p-4 bg-light">
      <CustomText className="font-inter-bold text-lg mb-2">
        Total Expense
      </CustomText>
      <View style={{ gap: 16 }}>
        <Input
          keyboardType="decimal-pad"
          placeholder="Enter amount"
          error="This field is required"
        />
        <Input placeholder="Enter amount" />
      </View>
      <DatePicker label="Select date" error="Date is required" />
      <RadioGroup
        orientation="horizontal"
        value={radioValue}
        onChange={setRadioValue}
      >
        <RadioGroup.Radio value="0" bordered>
          Settled
        </RadioGroup.Radio>
        <RadioGroup.Radio value="1" bordered>
          Not settled yet
        </RadioGroup.Radio>
      </RadioGroup>
      {/* <RadioGroup
        // className="flex-row justify-between"
        value={radioValue}
        onChange={setRadioValue}
      >
        <RadioGroup.Radio value="0" bordered>
          Settled
        </RadioGroup.Radio>
        <RadioGroup.Radio value="1" bordered>
          Not settled yet
        </RadioGroup.Radio>
      </RadioGroup> */}
    </View>
  );
}
