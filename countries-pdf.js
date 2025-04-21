import { utilService } from "./Services/util.service.js"
import fs from 'fs'
import PDFDocument from 'pdfkit-table'


let countries = utilService.readJsonFile('countries.json')
let sortedCountries = sortCountries(countries)


function sortCountries(countries) {
    return countries.sort((a, b) => a.name.common.localeCompare(b.name.common))
    
}

// init document 
let doc = new PDFDocument({ margin: 30, size: 'A4' })

// connect to a write stream 
doc.pipe(fs.createWriteStream('./countries.pdf'))
createPdf(doc, sortedCountries)
    .then(() => doc.end())      // close document 

function createPdf(doc, sortedCountries) {
    const table = {
        title: 'Countries',
        subtitle: 'Sorted by Alphabetical order',
        headers: ['Country Name', 'Capital', 'Population'],
        rows: sortedCountries.map(country => [
            country.name.common || 'N/A',
            country.capital || 'N/A',
            country.population || 'N/A',
        ]),
    }
    return doc.table(table, { columnsSize: [200, 100, 100] })
    
} 