import type { ImageSourcePropType, ViewStyle, ImageStyle } from 'react-native';

export interface ImageSlideStyleType
  extends Omit<ImageStyle, 'height' | 'width'> {}

export interface LoadedImageType {
  source: ImageSourcePropType;
  isLoading: boolean;
  isFailed: boolean;
}

export interface SlideType extends LoadedImageType {
  index: number;
}

export interface Slide360PropsType {
  images: ImageSourcePropType[];
  dragDeltaX?: number;
  height?: number;
  onPressSlide?: (slide: SlideType) => void;
  containerStyle?: ViewStyle;
}
