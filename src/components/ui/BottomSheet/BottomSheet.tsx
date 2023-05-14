import { useRef } from 'react'
import BaseBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import { BottomSheetProps } from './BottomSheet.types'

export default function BottomSheet({ children, ...props }: BottomSheetProps) {
  const bottomSheetRef = useRef<BaseBottomSheet>(null)

  return (
    <BaseBottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose
      backdropComponent={BottomSheetBackdrop}
      {...props}
    >
      {children}
    </BaseBottomSheet>
  )
}