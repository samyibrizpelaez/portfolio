import UNdata from '../data/UNdata.json' 
import CountryCoord from '../data/CountryCoords.json' 



// DATASHAPE SAMPLE (https://data.un.org/Data.aspx?d=POP&f=tableCode%3a28):
// "Country or Area": "Albania",
// "Year": 2011,
// "Area": "Total",
// "Sex": "Both Sexes",
// "Religion": "Catholic",
// "Record Type": "Census - de jure - complete tabulation",
// "Reliability": "Final figure, complete",
// "Source Year": 2013,
// "Value": 280921,
// "Value Footnotes": ""

// DATASHAPE COUNTRY COORDINATES (https://github.com/eesur/country-codes-lat-long):
// json file that has all country:
// ISO 3166-1 alpha-3 codes
// longitude and latitude (average)
// numeric codes
// country names
// and alpha-2 codes
//
// "country" : "Albania",
// "alpha2" : "AL",
// "alpha3" : "ALB",
// "numeric" : 8,
// "latitude" : 41,
// "longitude" : 20

export default class UNDataAdapter
{
    constructor() 
    {
        // Get data sources (JSON)
        this.UNdata                     = UNdata
        this.StoredCountryCoordinates   = CountryCoord

        // Get possible filters from the same data
        this.TimeAxis   = this.getUniques(this.UNdata, "Year")
        this.Religions  = this.getUniques(this.UNdata, "Religion")
        this.Sexes      = this.getUniques(this.UNdata, "Sex")

        // Set default filter matching the first value of
        // each possible filter
        this.Filter     = {
            "Country or Area"   : [],
            "Year"              : [this.TimeAxis[0]],
            "Area"              : [],
            "Sex"               : [this.Sexes[0]],
            "Religion"          : [this.Religions[0]],
            "Record Type"       : [],
            "Reliability"       : [],
            "Source Year"       : [],
            "Value"             : [], 
        }

        // Execute Data ETL :
        // Filter, Sort and add agreggates 
        // Stores the value for easier access
        this.ResultingData = this.getResultingData()

    }

    setFilter(Year, Religion, Sex)
    {
        this.Filter     = {
            "Country or Area"   : [],
            "Year"              : [parseInt(Year)],
            "Area"              : [],
            "Sex"               : [Sex],
            "Religion"          : [Religion],
            "Record Type"       : [],
            "Reliability"       : [],
            "Source Year"       : [],
            "Value"             : [], 
        }
        ////console.log("SetFilter - Selected Filter : ", this.Filter)

        this.ResultingData = this.getResultingData()

        ////console.log("SetFilter - Resulting Data : ", this.ResultingData )

        return this.ResultingData
    }

    getResultingData()
    {
        ////console.log("Resulting Data - RAW UN Data : ", this.UNdata)

        ////console.log("Resulting Data - filter :", this.Filter)

        let dataQueriedFromUNData = this.selectData(this.UNdata, this.Filter)
        ////console.log("Resulting Data - Queried UN Data : ", dataQueriedFromUNData)

        dataQueriedFromUNData = this.addCountriesCoordinates(dataQueriedFromUNData)
        ////console.log("Resulting Data - Queried UN Data with aggregated coordinates: ", dataQueriedFromUNData)

        return dataQueriedFromUNData
    }

    getUniques(data, fieldToFilter)
    {
        const unique = [... new Set(data.map(item => item[fieldToFilter]))]

        unique.sort()

        ////console.log("GetUniques - Uniques for " + fieldToFilter + " :", unique)

        return unique
    }


    selectData(data, filter)
    {
        let query       = this.buildFilter(filter)
        ////console.log("SelectData - Built Filter : ", query)

        let queriedData = this.filterData(data, query)
        ////console.log("SelectData - Queried Data : ", queriedData)


        return queriedData

    }

    buildFilter(filter){
        let query = {};
        for (let keys in filter) {
            if (filter[keys].constructor === Array && filter[keys].length > 0) {
                query[keys] = filter[keys];
            }
        }

        return query;
    }

    filterData(data, query){

        ////console.log("FilterData - Original Data : ", data)
        ////console.log("FilterData - Incoming Query : ", query)

        const filteredData = data.filter( (item) => {
            for (let key in query) {
                if (item[key] === undefined || !query[key].includes(item[key])) {
                    return false;
                }
            }
            return true;
        });

        ////console.log("FilterData - Filtered Data: ", filteredData)

        return filteredData;
        
    }

    //Agregate Country code, latitude and logitude to the previously queried data
    addCountriesCoordinates(data){

        let aggregatedData = data
        aggregatedData.forEach(element => {
           
            try{
                this.filter = {
                    "country"   :  [element['Country or Area']],
                }
                //console.log(this.filter)
    
                let result = this.selectData(this.StoredCountryCoordinates, this.filter)[0]
    
                //console.log(result)
                element['alpha2']    = result.alpha2
                element['alpha3']    = result.alpha3
                element['latitude']  = result.latitude
                element['longitude'] = result.longitude
            }
            catch
            {
                //console.log("Missing coordinates for : ", element['Country or Area'])
            }
            
        });

        return aggregatedData
    }

    // getCountryCoordinates(country)
    // {
    //     let key = "9ca41ad3f19b460782e8763b54712e39"
    //     let endpoint = 'https://api.opencagedata.com/'
    //     let query = 'geocode/v1/json?key='+ key +'&q='+ country
    //     let request = endpoint + query

    //     fetch(request).then( 

    //         (response) => 
    //         {
    //             return response.json()
    //         }

    //     ) 
    //     .then( 
    //         (jsonData) => 
    //         {
    //             ////console.log('OCD API Global Response :', jsonData);
    //             ////console.log('OCD API Query Response :', jsonData.results[0]);
    //             ////console.log('OCD API Location Geometric Coordinates :', jsonData.results[0].geometry );
    //         }
    //     )

    // }

}