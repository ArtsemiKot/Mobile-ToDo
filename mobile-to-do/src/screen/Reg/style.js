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
    height: 170,
    resizeMode: 'contain',
  },
  input: {
    width: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF'
  },
  textAlready: {
    fontSize: 16,
    fontFamily: 'Poppins400',
    fontWeight: 400
  },
  sign: {
    color: '#50C2C9',
    fontSize: 16,
    fontFamily: 'Poppins400',
    fontWeight: 400
  },
  textWelcome: {
    fontSize: 18,
    fontFamily: 'Poppins700',
    fontWeight: 700,
    marginTop: 30
  },
  textLets: {
    fontSize: 13,
    fontFamily: 'Poppins400',
    fontWeight: 400,
    width: 200,
    textAlign: 'center',
    marginBottom: 40
  }
});