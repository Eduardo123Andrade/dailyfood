import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from './Icon'
import { useNavigation } from '@react-navigation/native'
import { SPACING } from 'theme'

interface BaseNavigationHeaderProps {
  iconName?: string
  onPress?: () => void
  title: string
}

export const BaseNavigationHeader: React.FC<BaseNavigationHeaderProps> = ({
  iconName,
  onPress,
  title,
}) => {
  const [canGoBack, setCanGoBack] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    setCanGoBack(navigation.canGoBack())
  }, [])

  const onPressBack = () => {
    console.log('oi')
  }

  const _onPress = () => {
    if (typeof onPress === 'function') return onPress()
  }

  return (
    <View style={styles.container}>
      {canGoBack ? (
        <View>
          <Icon onPress={onPressBack} name="arrow-back" />
        </View>
      ) : (
        <View style={styles.emptyView} />
      )}

      <Text style={{ color: '#3c3', fontSize: 18, fontWeight: 'bold' }}>
        {title}
      </Text>

      {!!iconName ? (
        <View>
          <Icon onPress={_onPress} name={iconName} />
        </View>
      ) : (
        <View style={styles.emptyView} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    height: 60,
    backgroundColor: '#f4511e',
  },
  emptyView: {
    width: SPACING.md,
  },
})
