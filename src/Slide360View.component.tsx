import { useEffect, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import ImagePlaceholder from './ImagePlaceholder.component';

import throttle from 'lodash.throttle';

import type { LoadedImageType, Slide360PropsType } from './types';

const Slide360View = ({
  images,
  dragDeltaX = 20,
  height = 200,
  containerStyle,
  onPressSlide,
}: Slide360PropsType) => {
  const [currentViewIndex, setcurrentViewIndex] = useState<number>(0);

  const lastActiveViewIndex = useRef(0);
  const currentScrollItemPoint = useRef<number | undefined>(undefined);
  const totalImages = images.length || 0;

  const throttleSetState = useMemo(
    () => throttle((newValue) => setcurrentViewIndex(newValue), 200),
    []
  );

  useEffect(() => {
    return () => {
      throttleSetState.cancel(); // Cancel any pending throttled calls
    };
  }, [throttleSetState]);

  const pan = Gesture.Pan()
    .minDistance(1)
    .onUpdate((event) => {
      let scrollItemPoint = Math.floor(-event.translationX / dragDeltaX);

      if (currentScrollItemPoint.current !== scrollItemPoint) {
        currentScrollItemPoint.current = scrollItemPoint;

        let cursorIndex = scrollItemPoint % totalImages;

        if (cursorIndex === -0) {
          cursorIndex = 0;
        } else if (cursorIndex < 0) {
          cursorIndex = Math.abs(cursorIndex + totalImages);
        }

        const nextSlideIndex =
          (cursorIndex + lastActiveViewIndex.current) % totalImages;

        throttleSetState(nextSlideIndex);
      }
    })
    .onEnd(() => {
      lastActiveViewIndex.current = currentViewIndex;
    })
    .runOnJS(true);

  const renderImage = useMemo(() => {
    const handleOnPressImage = (props: LoadedImageType) =>
      onPressSlide?.({ ...props, index: currentViewIndex });

    return (
      <ImagePlaceholder
        source={images[currentViewIndex]}
        height={height}
        onPressImage={handleOnPressImage}
      />
    );
  }, [currentViewIndex, images, height, onPressSlide]);

  const rootContainerStyle = [styles.container, { height }, containerStyle];

  return (
    <GestureHandlerRootView style={rootContainerStyle}>
      <GestureDetector gesture={pan}>
        <View collapsable={false}>{renderImage}</View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Slide360View;
