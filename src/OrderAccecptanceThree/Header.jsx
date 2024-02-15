// material-ui
// third-party
import { Text, View, Image, StyleSheet, } from '@react-pdf/renderer';
import logoImage from '../assets/images/logo.png';
import RobotoBold from '../assets/images/fonts/Roboto/Roboto-Bold.ttf';
import { Font } from '@react-pdf/renderer';
// import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';

// assets
// import Logo from 'assets/images/image.png';
const textPrimary = '#262626';
const textSecondary = '#8C8C8C';



Font.register({ family: 'Roboto-Bold', src: RobotoBold });

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row'
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100vw',
  },
  detailColumn: {
    marginBottom: '12px',
    flexDirection: 'column',
    flexGrow: 2
  },
  chipTitle: {
    fontSize: '8px',
    padding: 4
  },
  chip: {
    alignItems: 'center',
    borderRadius: '4px',
    marginLeft: 52,
    marginRight: 4,
    marginBottom: 8
  },
  leftColumn: {
    flexDirection: 'column',
    width: 36,
    marginRight: 10,
    paddingLeft: 4,
    marginTop: 4
  },
  image: {
    width: 90,
    height: 28
  },
  mainContainer: {
    flexDirection: 'column',
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  title: {
    color: textPrimary,
    fontSize: '10px'
  },
  caption: {
    color: textSecondary,
    fontSize: '10px'
  },



  head1: {
    flexDirection: 'row',
    backgroundColor: '#FFB74D',
    justifyContent: 'center',
    width: '100%',
  },

  head2: {
    flexDirection: 'row',
    justifyContent: 'left',
    width: '100%',
    marginTop: '10',
  },
  head3: {
    marginTop: '0',
  },

  border: {
    border: '1px solid #d4d4d4',
  },

  head2_con1: {
    width: '65%',
  },
  head2_con2: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  title7: {
    fontSize: '12',
    fontWeight: 'bold',
    padding: '5',
  },

  title1: {
    backgroundColor: '#FFB74D',
    fontSize: '14',
    marginBottom: '6px',
    fontFamily: "Roboto-Bold",

  },
  title2: {
    backgroundColor: '#FFB74D',
    fontSize: '11',
    padding: '3',
  },
  description: {
    fontSize: '10',
    fontWeight: '400',
    padding: '0',
    lineHeight: '1.4',
  },
  logoImages: {
    width: '180',
    height: '70',
  },

  tableflex: {
    flexDirection: 'row',
    display: 'flex',
  },

  tab1: {
    border: '1px solid #d4d4d4',
    fontSize: '10',
    padding: '3',
    lineHeight: '1',
    width: '100px',
  },
  tab2: {
    width: '200px',
  },
  description1: {
    fontSize: '10',
    padding: '2',
  },
  paddingx: {
    paddingHorizontal: '4',
  },
  paddingy: {
    paddingVertical: '4',
  },
  bold: {
    fontWeight: 'bold',
  },
  padb: {
    paddingBottom: '2px',
  },

});

const Header = () => {
  return (



    <View style={styles.mainContainer}>

      <View style={[styles.head2, styles.border]}>
        <View style={[styles.head2_con1,]}>
          <Text style={styles.title1}>PROMECH INDUSTRIES PRIVATE LIMITED</Text>
          <Text style={[styles.description, styles.paddingx]}>7/237 A, Pattanam to Peedampalli Main Road, Nagamanaickenpalayam,{'\n'} Coimbatore - 641016, Tamil Nadu, India.</Text>
          <Text style={[styles.description, styles.paddingx, styles.padb,]}>Cell : +91 99943 99996 | +91 99943 99006  {'\n'} Email : promech5@yahoo.co.in | Web: www.marksorter.com </Text>
        </View>
        <View style={[styles.head2_con2]}>
          <Image src={logoImage} style={[styles.image, styles.logoImages]} />
        </View>
      </View>


    </View>


  );
};

export default Header;