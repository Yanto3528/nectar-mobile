import { BottomSheetProps as BaseBottomSheetProps } from "@gorhom/bottom-sheet";

export type BottomSheetProps = Omit<
  BaseBottomSheetProps,
  "enablePanDownClose" | "backdropComponent" | "ref"
>;
