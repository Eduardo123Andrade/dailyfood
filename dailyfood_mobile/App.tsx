import { StyleSheet, Text, View } from 'react-native'
import { colors } from 'theme/colors'
// import { colors } from "theme/colors2";
import { TextInput } from 'core/components'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to dailyfood</Text> */}
      <TextInput />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[900],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: colors.gray[400],
  },
})
