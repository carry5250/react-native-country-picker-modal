/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Platform,
  StyleProp,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
})

interface CloseButtonProps {
  style?: StyleProp<ViewStyle>
  imageStyle?: StyleProp<ImageStyle>
  image?: ImageSourcePropType
  onPress?(): void
}

const CloseButtonAndroid: React.FC<CloseButtonProps> = (props) => {
  let closeImage: ImageSourcePropType = require('./assets/images/close.android.png')

  if (props.image) {
    closeImage = props.image
  }
  const { onBackgroundTextColor } = useTheme()
  return (
    <View style={[styles.container, props.style]}>
      <TouchableNativeFeedback
        background={
          typeof Platform.Version === 'number' && Platform.Version < 21
            ? TouchableNativeFeedback.SelectableBackground()
            : TouchableNativeFeedback.SelectableBackgroundBorderless()
        }
        onPress={props.onPress}
      >
        <View>
          <Image
            source={closeImage}
            style={[
              styles.imageStyle,
              props.imageStyle,
              { tintColor: onBackgroundTextColor },
            ]}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const CloseButtonIOS: React.FC<CloseButtonProps> = (props) => {
  let closeImage = require('./assets/images/close.ios.png')

  if (props.image) {
    closeImage = props.image
  }
  const { onBackgroundTextColor } = useTheme()
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={closeImage}
          style={[
            styles.imageStyle,
            props.imageStyle,
            { tintColor: onBackgroundTextColor },
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}
const CloseButtonHMOS: React.FC<CloseButtonProps> = (props) => {
  let closeImage = require('./assets/images/close.ios.png')

  if (props.image) {
    closeImage = props.image
  }
  const { onBackgroundTextColor } = useTheme()
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={closeImage}
          style={[
            styles.imageStyle,
            props.imageStyle,
            { tintColor: onBackgroundTextColor },
          ]}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Platform.select({
  ios: CloseButtonIOS,
  android: CloseButtonAndroid,
  web: CloseButtonIOS,
  harmony: CloseButtonHMOS,
  default: CloseButtonIOS,
})
