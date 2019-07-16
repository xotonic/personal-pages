import React from 'react'
import ReactPDF, { Page, Text, Link, View, Document, StyleSheet, Font } from '@react-pdf/renderer'

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
    flexGrow: 0
  },
  mainTitle: {
    fontWeight: 'bold',
    marginTop: '5pt',
    marginBottom: '5pt',
    letterSpacing: '1pt',
    fontSize: '14pt'
  },
  xpTitle: {
    fontWeight: 'bold'
  },
  xpItem: {
    marginBottom: '4pt'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  skillTitle: {
    fontWeight: 'bold'
  },
  skillSection: {
    fontWeight: 'bold',
    letterSpacing: '1pt',
    padding: '2pt 0'
  },
  candidateName: {
    fontSize: '18pt',
    letterSpacing: '3pt',
    textAlign: 'center',
    marginTop: '20pt',
    fontWeight: 'bold'
  },
  candidatePosition: {
    fontSize: '16pt',
    letterSpacing: '2pt',
    textAlign: 'center'
  },
  contactDelimiter: {
    padding: '0 10pt'
  }
})

const SneakyLink = ({ children }) => (
  <Link src={children} style={styles.link}>{children}</Link>
)

const CandidateName = ({ children }) => (
  <Text style={styles.candidateName}>{children}</Text>
)

const CandidatePosition = ({ children }) => (
  <Text style={styles.candidatePosition}>{children}</Text>
)

const ExperienceTitle = ({ xp }) => (
  <Text style={styles.xpTitle}>
    <Text>{xp.title} &bull; {xp.from} - {xp.to} &bull; </Text>
    <Link style={styles.link}src={xp.employer.link}>{xp.employer.name}</Link>
  </Text>
)

const ExperienceItem = ({ xp }) => (
  <View style={styles.xpItem}>
    <ExperienceTitle xp={xp}/>
    <Text>{xp.description}</Text>
  </View>
)

const SkillTitle = ({ children }) => (
  <Text style={styles.skillTitle}>&bull; {children}</Text>
)
const SkillSection = ({ children }) => (
  <Text style={styles.skillSection}>{children}</Text>
)

const Title = ({ children }) => (<Text style={styles.mainTitle}>{children}</Text>)

const Section = ({ children }) => (<View style={styles.section}>{children}</View>)

const ContactDelimiter = () => (
  <Text style={styles.contactDelimiter}>&bull;</Text>
)

const Contacts = ({ data }) => (
  <View style={{
    flexDirection: 'row',
    padding: '10pt 0',
    justifyContent: 'center'
  }}>
    <SneakyLink>{data.website}</SneakyLink>
    <ContactDelimiter/>
    <SneakyLink>{data.email}</SneakyLink>
    <ContactDelimiter/>
    <SneakyLink>{data.linkedin}</SneakyLink>
    <ContactDelimiter/>
    <SneakyLink>{data.github}</SneakyLink>
  </View>
)
// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Section>
        <CandidateName>{yml.resume.candidate}</CandidateName>
      </Section>
      <Section>
        <CandidatePosition>{yml.resume.position}</CandidatePosition>
      </Section>
      <Contacts data={yml.resume.contacts}/>
      <Section>
        <Title>About me</Title>
        <Text>{yml.resume.about}</Text>
      </Section>
      <Section>
        <Title>Experience</Title>
        <View>
          {yml.resume.experience
            .filter(value => value.type === 'job')
            .map((value, index) => <ExperienceItem key={index} xp={value}/>)}
        </View>
      </Section>
      <Section>
        <Title>Education</Title>
        <View>
          {yml.resume.experience
            .filter(value => value.type === 'edu')
            .map((value, index) => <ExperienceItem key={index} xp={value}/>)}
        </View>
      </Section>
      <Section>
        <Title>Skills</Title>
        <SkillSection>
          Technical skills
        </SkillSection>
        <View>
          {
            yml.resume.skills.tech
              .map((value, index) =>
                <Text key={index}>
                  <SkillTitle>{value.name}</SkillTitle>
                  <Text>
                    {
                      value.related && ': ' +
                      value.related
                        .map((value, index) => value.name)
                        .join(', ') + '.'
                    }
                  </Text>
                </Text>
              )
          }
        </View>
        <SkillSection>
          Languages
        </SkillSection>
        <View>
          {
            yml.resume.skills.languages
              .map((value, index) =>
                <Text key={index}>
                  <SkillTitle>{value.name}</SkillTitle>
                  <Text>: {value.level}</Text></Text>
              )
          }
        </View>
      </Section>
    </Page>
  </Document>
)

if (!fs.existsSync('../static')) {
  fs.mkdirSync('../static')
}

ReactPDF.render(<MyDocument/>, `../static/resume.pdf`)
