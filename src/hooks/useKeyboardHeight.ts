import { useEffect, useState } from 'react'
import { Keyboard, KeyboardEvent, Platform } from 'react-native'

export const useKeyboardHeight = (): [
  number,
  React.Dispatch<React.SetStateAction<number>>
] => {
  const [keyboardHeight, setKeyboardHeight] = useState(336)

  useEffect(() => {
    if (Platform.OS !== 'ios') return

    function onKeyboardDidShow(e: KeyboardEvent) {
      setKeyboardHeight(e.endCoordinates.height)
    }

    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow
    )

    return () => {
      showSubscription.remove()
    }
  }, [])

  return [keyboardHeight, setKeyboardHeight]
}
