"use strict"

let numberOfSeries = prompt(`nechta serial kordingiz`,"");

const seriesDB = {
    count:numberOfSeries,
    series:{},
    actors:{},
    geners:[],
    private:false
}

let savol1 = prompt("oxirgi korgan serialingiz",'')
let savol2 = prompt("Nechi baho berasiz ?",'')
let savol3 = prompt("oxirgi korgan serialingiz",'')
let savol4 = prompt("Nechi baho berasiz ?",'')

seriesDB.series[savol1] = savol2
seriesDB.series[savol3] = savol4

console.log(seriesDB);