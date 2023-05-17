import { useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import dayjs from 'dayjs';
import { TouchableOpacity, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { Direction } from 'react-native-calendars/src/types';

import { useBottomSheetModal } from '@/lib/hooks/common';

import BottomSheetModal from '../BottomSheetModal';
import Button from '../Button';
import CustomText from '../CustomText';
import { FormLabel, FormErrorMessage } from '../Form';

import { datePickerStyles } from './DatePicker.styles';
import { DatePickerProps } from './DatePicker.types';

const calendarTheme = {
  selectedDayBackgroundColor: '#7F3DFF',
  textDayFontFamily: 'inter-medium',
  textMonthFontFamily: 'inter-bold',
  textDayHeaderFontFamily: 'inter',
};

export default function DatePicker({ label, labelClassName, error }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));

  const { isOpen, onOpen, onClose } = useBottomSheetModal();

  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString);
    onClose();
  };

  const renderArrow = (direction: Direction) => (
    <Ionicons name={`chevron-${direction === 'left' ? 'back' : 'forward'}-outline`} size={24} />
  );

  return (
    <>
      <View>
        {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
        <TouchableOpacity className={datePickerStyles({ error: !!error })} onPress={onOpen}>
          <Ionicons name="calendar-sharp" size={16} />
          <CustomText className="ml-4">{dayjs(selectedDate).format('DD MMMM YYYY')}</CustomText>
        </TouchableOpacity>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </View>
      <BottomSheetModal isVisible={isOpen} onClose={onClose}>
        <View className="p-4">
          <CustomText className="pb-2 font-inter-bold text-lg border-b border-light-20">
            Select date
          </CustomText>
          <View className="h-[400]">
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [selectedDate]: { selected: true, disableTouchEvent: true },
              }}
              theme={calendarTheme}
              renderArrow={renderArrow}
            />
          </View>
          <Button variant="outline" onPress={onClose}>
            Cancel
          </Button>
        </View>
      </BottomSheetModal>
    </>
  );
}
