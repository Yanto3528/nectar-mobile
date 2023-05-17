import { View } from 'react-native';
import Modal from 'react-native-modal';

import { BottomSheetModalProps } from './BottomSheetModal.types';

export default function BottomSheetModal({ children, onClose, ...props }: BottomSheetModalProps) {
  return (
    <Modal
      className="justify-end"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      supportedOrientations={['portrait', 'landscape']}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      hideModalContentWhileAnimating
      style={{ margin: 0 }}
      avoidKeyboard={false}
      animationInTiming={300}
      animationOutTiming={300}
      coverScreen
      hasBackdrop
      propagateSwipe
      {...props}
    >
      <View className="bg-light rounded-tr-xl rounded-tl-xl">
        <View className="items-center py-2">
          <View className="w-10 h-1 bg-dark-25 rounded-full" />
        </View>
        <View>{children}</View>
      </View>
    </Modal>
  );
}
