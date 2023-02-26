import fs from 'fs'
import csv from 'csv-parser'

export async function ReadFile () {
  fs.createReadStream('./tasks.csv')
    .pipe(csv())
    .on('data', (data) => {
      const body = {
        title: data.title, 
        description: data.description
      }
      fetch('http://localhost:3333/tasks', {
        method: 'POST',
        body: JSON.stringify(body),
      })
    }) 
}


