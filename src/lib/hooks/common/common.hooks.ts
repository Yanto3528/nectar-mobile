import { useState, useRef, useCallback } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

export function useBottomSheet() {
  const [sheetIndex, setSheetIndex] = useState(-1);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const onCloseSheet = useCallback(() => setSheetIndex(0), []);
  const onOpenSheet = useCallback(() => setSheetIndex(1), []);

  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index);
  }, []);

  return {
    sheetIndex,
    bottomSheetRef,
    onCloseSheet,
    onOpenSheet,
    handleSheetChanges,
  };
}
