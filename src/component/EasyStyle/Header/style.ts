import ReactPDf, { StyleSheet } from '@react-pdf/renderer';

export const styles: ReactPDf.Styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FB',
    flexDirection: 'row',
    paddingVertical: 40,
    paddingHorizontal: 30
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  info: {
    marginLeft: 20
  },
  name: {
    fontWeight: 'medium',
    fontSize: 20
  },
  desc: {
    fontSize: 12,
    color: '#666666'
  },
  fr: {
    flexDirection: 'row'
  },
  divide: {
    marginLeft: 8
  },
  block: {
    marginTop: 10,
    alignItems: 'center'
  },
  phone: {
    width: 16
  },
  email: {
    width: 14,
    marginLeft: 10
  }
});
