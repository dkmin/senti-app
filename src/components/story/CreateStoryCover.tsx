import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  inject,
  observer,
} from 'mobx-react/native';
import imageCacheHoc from 'react-native-image-cache-hoc';
import { CoverStore } from 'stores';

const { width, height } = Dimensions.get('window');

const CachableImage = imageCacheHoc(Image, {
  fileDirName: 'covers',
  cachePruneTriggerLimit: 1024 * 1024 * 50,
});

interface CreateStoryCoverProps {
  coverStore?: CoverStore;
}

const CreateStoryCover: React.FunctionComponent<CreateStoryCoverProps> = ({
  coverStore,
}) => (
  <React.Fragment>
    <CachableImage
      source={{ uri: coverStore!.current }}
      style={styles.background}
      permanent
    />
    <View style={styles.filter} />
  </React.Fragment>
);

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    backgroundColor: '#1A1A1A',
  },
  filter: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default inject('coverStore')(observer(CreateStoryCover));
