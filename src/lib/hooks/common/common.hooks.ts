import { useState, useCallback } from "react";

export function useBottomSheet() {
  const [sheetIndex, setSheetIndex] = useState(-1);

  const onCloseSheet = useCallback(() => setSheetIndex(0), []);
  const onOpenSheet = useCallback(() => setSheetIndex(1), []);

  const handleSheetChanges = useCallback((index: number) => {
    setSheetIndex(index);
  }, []);

  return {
    sheetIndex,
    onCloseSheet,
    onOpenSheet,
    handleSheetChanges,
  };
}
