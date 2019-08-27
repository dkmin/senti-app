import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Modal from 'react-native-modal';
import {
  RecordController,
  LoadingLayer,
} from 'components';
import { palette } from 'constants/style';

interface Props {
  isVisible: boolean;
  isLoading: boolean;
  hide: () => void;
  create: (path: string, duration: number) => Promise<void>;
}

const ReplyModal: React.FunctionComponent<Props> = ({
  isVisible,
  isLoading,
  hide,
  create,
}) => (
  <React.Fragment>
    {isLoading && <LoadingLayer />}
    <Modal
      isVisible={isVisible}
      onBackdropPress={hide}
      onBackButtonPress={hide}
      style={styles.modal}
      backdropOpacity={0}
      animationInTiming={400}
      animationOutTiming={600}
      hideModalContentWhileAnimating={true}
      useNativeDriver
    >
      <SafeAreaView style={styles.container} pointerEvents="auto">
        <RecordController create={create} />
      </SafeAreaView>
    </Modal>
  </React.Fragment>
);

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    paddingTop: 48,
    paddingBottom: 24,
    backgroundColor: palette.black.default,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});

export default ReplyModal;
