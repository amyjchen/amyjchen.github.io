import { Font, StyleSheet } from '@react-pdf/renderer';
import Jost300 from './assets/Jost/TrueType/Jost-300-Light.ttf';
import Jost400 from './assets/Jost/TrueType/Jost-400-Book.ttf';
import Jost500 from './assets/Jost/TrueType/Jost-500-Medium.ttf';
import Jost600 from './assets/Jost/TrueType/Jost-600-Semi.ttf';
import Jost700 from './assets/Jost/TrueType/Jost-700-Bold.ttf';

// Create styles
Font.register({
  family: 'Jost',
  format: "truetype",
  fonts: [
    { src: Jost300, fontWeight: 300 },
    { src: Jost400, fontWeight: 400 },
    { src: Jost500, fontWeight: 500 },
    { src: Jost600, fontWeight: 600 },
    { src: Jost700, fontWeight: 700 },
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Jost',
    paddingTop: '1cm',
    paddingBottom: '1cm',
    fontSize: 10,
  },
  header: {
    paddingBottom: 10,
    textAlign: 'center',
  },
  h1: {
    fontSize: 24,
  },
  section: {
    flexDirection: 'row',
  },
  subsection: {
    marginLeft: '5px',
    display: 'flex',
    flexDirection: 'column',
    width: '16cm',
  },
  subsubsection: {
    marginBottom: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  subheader: {
    width: '12%',
    marginLeft: '1cm',
    textAlign: 'right',
    marginRight: 5,
    fontWeight: 600,
  },
  heavytext: {
    fontWeight: 500,
    lineHeight: 1.25,
  },
  headline: {
    flexDirection: 'row', 
    display: 'flex', 
    justifyContent: 'space-between', 
    width: '16cm',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  inlineheadline: {
    flexDirection: 'row', 
    display: 'flex', 
    width: '16cm',
    fontWeight: 500,
    lineHeight: 1.25,
  },
  byline: {
    marginBottom: '3px',
    flexDirection: 'row', 
    display: 'flex', 
    width: '16cm',
    fontSize: 9,
    justifyContent: 'space-between', 
  },
  subtitle: {
    color: '#222222',
    lineHeight: 1.1,
    fontWeight: 400,
  },
  bullet: {
    width: '98%',
  },
  description: {
    flexDirection: 'row', 
    display: 'flex', 
    width: '16cm',
    justifyContent: 'space-between', 
    lineHeight: 1.15,
    marginBottom: '2px',
  },
});

export default styles;