import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@garlicbed/react-native-slide360' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ReactNativeSlide360Props = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ReactNativeSlide360View';

export const ReactNativeSlide360View =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ReactNativeSlide360Props>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
