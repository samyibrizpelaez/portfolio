import React from "react"
import Papa from 'papaparse'

import CSVData from '../data/UNdataCSV.txt' 
import UNdata from '../data/UNdata.json' 
import CSVToArray from "./CSVtoArray"

export default class UNDataAdapter
{
    constructor(props) 
    {
        console.log(UNdata)
        //Extract string from file

        //Parse CSV to Array
        // this.parsedData = Papa.parse(
        //     CSVData, 
        //     {
        //         header: true,
        //         download: true,
        //         complete: (results) => {
        //             console.log(results.data)
        //           },
        //     });

       
        // console.log(this.parsedData)

        // const [parsedCsvData, setParsedCsvData] = useState([]);

        // useEffect(() => {
        //     async function getData() {
        //         const response = await fetch("/data/nodes.csv");
        //         const reader = response.body.getReader();
        //         const result = await reader.read(); // raw array
        //         const decoder = new TextDecoder("utf-8");
        //         const csv = decoder.decode(result.value); // the csv text
        //         const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
        //         const rows = results.data; // array of objects
        //         setParsedCsvData(rows);
        //     }
        //     getData();
        // }, []);
    }

    parsedata(file){

    
        return 
        
    }

    // setData(data){

    //     this.state.data = data

    // }




}