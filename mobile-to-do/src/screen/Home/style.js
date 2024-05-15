import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F4F3',
    alignItems: 'center'
  },
  card: {
    width: '60%',
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeImg: {
    width: 170,
    height:170,
    resizeMode: 'contain',
  }
});