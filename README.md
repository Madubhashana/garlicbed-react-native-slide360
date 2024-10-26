# @garlicbed/react-native-slide360

A React Native component that provides a 360-degree view. Users can slide through images to see products from all angles.

## Demo

![Demo of 360 View Feature](res/sample.gif)

## Installation

You can install the package using npm or yarn:

```bash
npm install @garlicbed/react-native-slide360
```

or

```bash
yarn add @garlicbed/react-native-slide360
```

### Dependencies

This package requires `react-native-gesture-handler`. You can install it as follows:

For React Native:

```bash
yarn add react-native-gesture-handler
```

For Expo:

```bash
npx expo install react-native-gesture-handler
```

## Usage

To use the `Slide360` component, import it and pass the required props as shown below:

```javascript
import React from 'react';
import { Slide360 } from '@garlicbed/react-native-slide360';

const App = () => {
  const images = [
    require('./assets/image1.jpg'),
    require('./assets/image2.jpg'),
    require('./assets/image3.jpg'),
  ];

  return (
    <Slide360
      images={images}
      height={300}
      onPressSlide={(slide) => console.log(slide.index)}
      containerStyle={{ margin: 20 }}
    />
  );
};

export default App;
```

## Props

### `Slide360PropsType`

| Prop             | Type                         | Default     | Description                                                                                     |
| ---------------- | ---------------------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `images`         | `ImageSourcePropType[]`      | Required    | An array of images to display in the 360 view.                                                  |
| `dragDeltaX`     | `number`                     | `0`         | The drag delta value for sliding between images.                                                |
| `height`         | `number`                     | `300`       | The height of the component.                                                                    |
| `onPressSlide`   | `(slide: SlideType) => void` | `undefined` | Callback function that is called when a slide is pressed. It receives the current slide object. |
| `containerStyle` | `ViewStyle`                  | `{}`        | Custom styles for the container of the component.                                               |

### Type Definitions

#### `ImageSlideStyleType`

```typescript
export interface ImageSlideStyleType
  extends Omit<ImageStyle, 'height' | 'width'> {}
```

#### `LoadedImageType`

```typescript
export interface LoadedImageType {
  source: ImageSourcePropType;
  isLoading: boolean;
  isFailed: boolean;
}
```

#### `SlideType`

```typescript
export interface SlideType extends LoadedImageType {
  index: number;
}
```

#### `Slide360PropsType`

```typescript
export interface Slide360PropsType {
  images: ImageSourcePropType[];
  dragDeltaX?: number;
  height?: number;
  onPressSlide?: (slide: SlideType) => void;
  containerStyle?: ViewStyle;
}
```

## Contributing

If you'd like to contribute, please fork the repository and submit a pull request.

## Contact

For any inquiries or support, please open an issue on the [GitHub repository](https://github.com/Madubhashana/garlicbed-react-native-slide360).

## License

This package is licensed under the MIT License. See the LICENSE file for more details.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
