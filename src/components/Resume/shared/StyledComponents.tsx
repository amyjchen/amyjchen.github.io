import { Text, View } from '@react-pdf/renderer';
import styles from '../../../styles';

export const Header = ({name, details}: {name: string, details: string}) => (
  <View style={styles.header}>
    <Text style={styles.h1}>{name}</Text>
    <Body>{details}</Body>
  </View>
);

export const SubHeader = ({category}: {category: string}) => (
  <View style={styles.subheader}>
    <Body>{category.toUpperCase()}</Body>
  </View>
);

export const InlineHeadline = ({children} : {children: any}) => (
  <View style={styles.inlineheadline} >
    {children}
  </View>
);

export const Headline = ({children} : {children: any}) => (
  <View style={styles.headline} >
    {children}
  </View>
);

export const Byline = ({children} : {children: any}) => (
  <View style={styles.byline}>
    {children}
  </View>
);

export const Bullet = ({children} : {children: any}) => (
  <View style={styles.bullet} >
    {children}
  </View>
);

export const HeavyText = ({children} : {children: any}) => (
  <Text style={styles.heavytext} >
    {children}
  </Text>
);

export const Description = ({children} : {children: any}) => (
  <View style={styles.description} >
    {children}
  </View>
);

export const Section = ({children} : {children: any}) => (
  <View style={styles.section}>{children}</View>
);

export const SubSection = ({children} : {children: any}) => (
  <View style={styles.subsection}>{children}</View>
);

export const SubSubSection = ({children} : {children: any}) => (
  <View style={styles.subsubsection}>{children}</View>
);

export const Body = ({children} : {children: any}) => (
  <Text>{children}</Text>
);

export const Subtitle = ({children} : {children: any}) => (
  <Text style={styles.subtitle}>{children}</Text>
);