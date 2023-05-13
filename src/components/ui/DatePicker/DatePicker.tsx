import { useState, useRef, useCallback, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Calendar, DateData } from 'react-native-calendars'
import { Direction } from 'react-native-calendars/src/types';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';
import dayjs from 'dayjs';

import { useBottomSheet } from '@/lib/hooks/common'

import { FormLabel, FormErrorMessage } from '../Form'
import CustomText from '../CustomText';
import Button from '../Button';
import { DatePickerProps } from './DatePicker.types'
import { datePickerStyles } from './DatePicker.styles'

const calendarTheme = {
  selectedDayBackgroundColor: '#7F3DFF',
  textDayFontFamily: 'inter-medium',
  textMonthFontFamily: 'inter-bold',
  textDayHeaderFontFamily: 'inter',
}

export default function DatePicker({ label, labelClassName, error }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'))
  const { sheetIndex, onOpenSheet, onCloseSheet, bottomSheetRef, handleSheetChanges } = useBottomSheet()

  const snapPoints = useMemo(() => ['1%', '85%'], []);
  const onDayPress = (day: DateData) => {
    setSelectedDate(day.dateString)
    onCloseSheet()
  }

  const renderArrow = (direction: Direction) => {
    return <Ionicons name={`chevron-${direction === 'left' ? 'back' : 'forward'}-outline`} size={24} />
  }

  return (
    <>
      <View>
        {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
        <TouchableOpacity className={datePickerStyles({ error: !!error })} onPress={onOpenSheet}>
          <Ionicons name='calendar-sharp' size={16} />
          <CustomText className='ml-4'>{dayjs(selectedDate).format('DD MMMM YYYY')}</CustomText>
        </TouchableOpacity>
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={sheetIndex}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backdropComponent={BottomSheetBackdrop}
      >
        <View className='p-4 flex-1'>
          <CustomText className='pb-2 font-inter-bold text-lg border-b border-light-20'>Select date</CustomText>
          <View className='flex-1'>
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [selectedDate]: { selected: true, disableTouchEvent: true }
              }}
              theme={calendarTheme}
              renderArrow={renderArrow}
            />

          </View>
          <Button variant='outline' onPress={onCloseSheet}>Cancel</Button>
        </View>
      </BottomSheet>
    </>
  )
}