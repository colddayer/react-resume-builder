import ReactPDf, { StyleSheet } from '@react-pdf/renderer';

export const styles: ReactPDf.Styles = StyleSheet.create({
  fr: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20
  },
  url: {
    fontSize: 14,
    marginLeft: 6
  }
});
