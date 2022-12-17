import {useState} from 'react'
import React from 'react'

export default function CsvReader() 
{
  const [csvFile, setCsvFile] = useState()
  const [csvArray, setCsvArray] = useState()

  const processCSV = (str, delim = ',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim)
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    rows.pop()
    const newArray = rows.map(row => {
      const values = row.split(delim)
      const object = headers.reduce((obj, header, i) =>
      {
        obj[header] = values[i]
        return obj;
      }, {})
      return object 
    })
    console.log(newArray)
    setCsvArray(newArray)
  }
  const submit = () =>
  {
    const file = csvFile
    const reader = new FileReader()
    reader.onload = function(e) {
      const text = e.target.result
      processCSV(text)
    }
    reader.readAsText(file)
  }
  return (
    <form id = 'csv-form'>
        <input
        type = "file"
        accept = ".csv"
        id = "csvfile"
        onChange = {(e) => {
            setCsvFile(e.target.files[0])
        }}/>
        <br/>
        <button 
        onClick = {(e) => {
          e.preventDefault()
          if(csvFile)
          {
            submit()
          }
        }}>Submit</button>
    </form>
  )
}