const PDFDocument = require("pdfkit")
const fs = require('fs')
const yaml = require('js-yaml')

if (!fs.existsSync('static')){
    fs.mkdirSync('static');
}

var yml = yaml.safeLoad(fs.readFileSync('src/data/test.yml','utf8'))
const doc = new PDFDocument()
doc.pipe(fs.createWriteStream('static/resume.pdf'))

doc.text('Dmitriy Kuzmin')
doc.text('Software engineer')

doc.text('Salary: ' + yml.resume.salary)
doc.text('Skills:')
doc.list(yml.resume.skills)

doc.end()
