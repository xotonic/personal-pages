import React from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// const yaml = require('js-yaml')
const fs = require('fs')

// var yml = yaml.safeLoad(fs.readFileSync('../src/data/test.yml', 'utf8'))

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 0
  }
})

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Dmitriy Kuzmin</Text>
      </View>
      <View style={styles.section}>
        <Text>Software Engineer</Text>
      </View>
    </Page>
  </Document>
)

if (!fs.existsSync('../static')) {
  fs.mkdirSync('../static')
}

ReactPDF.render(<MyDocument/>, `../static/resume.pdf`)
