import { useState, useRef, useCallback, useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import BottomSheet from '@gorhom/bottom-sheet';
import Ionicons from '@expo/vector-icons/Ionicons';
import dayjs from 'dayjs';

import { FormLabel, FormErrorMessage } from '../Form'
import CustomText from '../CustomText';
import Button from '../Button';
import { DatePickerProps } from './DatePicker.types'
import { datePickerStyles } from './DatePicker.styles'

export default function DatePicker({ label, labelClassName, error }: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [sheetIndex, setSheetIndex] = useState(-1)

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['1%', '85%'], []);

  const onCloseSheet = () => setSheetIndex(0)

  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index)
  }, []);

  return (
    <>
      <View>
        {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
        <TouchableOpacity className={datePickerStyles({ error: !!error })} onPress={() => {
          setSheetIndex(1)
        }}>
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
      >
        <View className='p-4 flex-1'>
          <CustomText className='pb-2 font-inter-bold text-lg border-b border-light-20'>Select date</CustomText>
          <View className='flex-1'>
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString)
                onCloseSheet()
              }}
              markedDates={{
                [selectedDate]: { selected: true, disableTouchEvent: true }
              }}
              theme={{
                selectedDayBackgroundColor: '#7F3DFF',
              }}
            />

          </View>
          <Button variant='outline' onPress={onCloseSheet}>Cancel</Button>
        </View>
      </BottomSheet>
    </>
  )
}