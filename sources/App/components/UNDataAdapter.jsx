import React from "react"

import {useState, useEffect} from 'react'
import Papa from 'papaparse'

import CSVData from '../data/UNdataCSV.txt' 

export default class UNDataAdapter
{

    // constructor(props) 
    // {
    //     this.dataIsLoaded = false

    //     const [parsedCsvData, setParsedCsvData] = useState([]);
    //     this.parsedData = parsedCsvData

    //     if(!this.dataIsLoaded)
    //     {
    //         Papa.parse(CSVData, {
    //             header: true,
    //             download: true,
    //             complete: results => {
    //                 setParsedCsvData(results.data)
    //                 console.log(parsedCsvData)
    //                 this.dataIsLoaded = true
    //             },
    //             });
    //     }
       
    // }




}