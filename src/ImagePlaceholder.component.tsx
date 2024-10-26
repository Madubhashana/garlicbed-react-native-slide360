import { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type ImageStyle,
} from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import type { ImageSlideStyleType, LoadedImageType } from './types';

type ImagePlaceholderPropsType = {
  source?: ImageSourcePropType;
  height?: number;
  onPressImage?: (image: LoadedImageType) => void;
  disabled?: boolean;
  imageStyle?: ImageSlideStyleType;
};

const ImagePlaceholder = ({
  source,
  height,
  onPressImage,
  disabled,
  imageStyle = {},
}: ImagePlaceholderPropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const onLoadEnd = () => setIsLoading(false);
  const onError = () => setIsFailed(true);

  if (!source) {
    return (
      <View style={{ height }}>
        <ActivityIndicator size="large" style={styles.loader} />
      </View>
    );
  }

  const handleOnPressImage = () =>
    onPressImage?.({ source, isLoading, isFailed });

  const imageSlideStyles: ImageStyle[] = [
    styles.imageContainer,
    imageStyle,
    { height: '100%', width: 'auto' },
  ];

  return (
    <Pressable onPress={handleOnPressImage} disabled={disabled}>
      <ActivityIndicator
        size="large"
        hidesWhenStopped
        animating={isLoading}
        style={styles.loader}
      />
      {isFailed ? (
        <View style={styles.failedToLoad}>
          <Text>Failed to load the image</Text>
        </View>
      ) : null}
      <Image
        source={source}
        style={imageSlideStyles}
        onError={onError}
        onLoadEnd={onLoadEnd}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    top: '40%',
  },
  imageContainer: {
    resizeMode: 'contain',
  },
  failedToLoad: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImagePlaceholder;
