import React from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer'

const yaml = require('js-yaml')
const fs = require('fs')

var yml = yaml.safeLoad(fs.readFileSync('../src/data/test.yml', 'utf8'))

Font.register({ family: 'Roboto',
  fonts: [
    { src: 'font/Roboto-BlackItalic.ttf', fontStyle: 'italic', fontWeight: 'heavy' },
    { src: 'font/Roboto-Black.ttf', fontStyle: 'normal', fontWeight: 'heavy' },
    { src: 'font/Roboto-BoldItalic.ttf', fontStyle: 'italic', fontWeight: 'bold' },
    { src: 'font/Roboto-Bold.ttf', fontStyle: 'normal', fontWeight: 'bold' },
    { src: 'font/Roboto-MediumItalic.ttf', fontStyle: 'italic', fontWeight: 'medium' },
    { src: 'font/Roboto-Medium.ttf', fontStyle: 'normal', fontWeight: 'medium' },
    { src: 'font/Roboto-Italic.ttf', fontStyle: 'italic', fontWeight: 'normal' },
    { src: 'font/Roboto-Regular.ttf', fontStyle: 'normal', fontWeight: 'normal' },
    { src: 'font/Roboto-LightItalic.ttf', fontStyle: 'italic', fontWeight: 'light' },
    { src: 'font/Roboto-Light.ttf', fontStyle: 'normal', fontWeight: 'light' },
    { src: 'font/Roboto-ThinItalic.ttf', fontStyle: 'italic', fontWeight: 'thin' },
    { src: 'font/Roboto-Thin.ttf', fontStyle: 'normal', fontWeight: 'thin' }
  ]
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12pt'
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 0,
    borderWidth: 1,
    borderColor: 'red'
  },
  mainTitle: {
    fontWeight: 'bold',
    color: 'red',
    marginTop: '5pt',
    marginBottom: '5pt'
  },
  xpTitle: {
    fontWeight: 'bold'
  },
  xpItem: {
    marginBottom: '4pt'
  }
})

const ExperienceItem = ({ xp }) => (
  <View style={styles.xpItem}>
    <Text style={styles.xpTitle}>{xp.title}</Text>
    <Text>{xp.description}</Text>
  </View>
)

const Title = props => (<Text style={styles.mainTitle}>{props.children}</Text>)

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{yml.resume.candidate}</Text>
      </View>
      <View style={styles.section}>
        <Text>{yml.resume.position}</Text>
      </View>
      <View style={styles.section}>
        <Title>About me</Title>
        <Text>{yml.resume.about}</Text>
      </View>
      <View style={styles.section}>
        <Title>Experience</Title>
        <View>
          {yml.resume.experience
            .filter(value => value.type === 'job')
            .map((value, index) => <ExperienceItem key={index} xp={value}/>)}
        </View>
      </View>
      <View style={styles.section}>
        <Title>Education</Title>
        <View>
          {yml.resume.experience
            .filter(value => value.type === 'edu')
            .map((value, index) => <ExperienceItem key={index} xp={value}/>)}
        </View>
      </View>
      <Text>The document is unfinished!</Text>
    </Page>
  </Document>
)

if (!fs.existsSync('../static')) {
  fs.mkdirSync('../static')
}

ReactPDF.render(<MyDocument/>, `../static/resume.pdf`)
