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
  button: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#50C2C9',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    marginTop: 100,
    fontSize: 18,
    fontFamily: 'Poppins600',
    fontWeight: 600
  },
  textGets: {
    fontFamily: 'Poppins700',
    fontSize: 18,
    fontWeight: 700,
    marginTop: 65
  },
  textLorem: {
    fontFamily: 'Poppins400',
    fontSize: 13,
    fontWeight: 400,
    textAlign: 'center',
    width: 190,
    marginTop: 20
  }
});