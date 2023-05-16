import { ModalProps } from "react-native-modal";

export type BottomSheetModalProps = Partial<ModalProps> & {
  onClose: () => void;
};
