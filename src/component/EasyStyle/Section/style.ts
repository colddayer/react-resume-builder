import ReactPDf, { StyleSheet } from '@react-pdf/renderer';

export const styles: ReactPDf.Styles = StyleSheet.create({
  divider: {
    backgroundColor: '#4e6ef2',
    width: 2,
    height: 16,
    marginRight: 5
  },
  fr: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: 'medium'
  },
  children: {
    paddingLeft: 7,
    paddingTop: 14
  }
});
