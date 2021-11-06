import ReactPDf, { StyleSheet } from '@react-pdf/renderer';

export const styles: ReactPDf.Styles = StyleSheet.create({
  fr: {
    flexDirection: 'row'
  },
  mainText: {
    fontWeight: 'medium',
    fontSize: 13,
    color: '#333333'
  },
  jcstw: {
    justifyContent: 'space-between',
    flex: 1
  },
  time: {
    fontSize: 13,
    color: '#666666'
  },
  secondText: {
    fontSize: 13,
    color: '#666666'
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  children: {
    marginTop: 14
  }
});
