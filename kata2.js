//split
//create Element
//json struningfy
//document.place append

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


function k1() {
    let gotCitiesArr = gotCitiesCSV.split(',');
    // gotCitiesEle.textContent = JSON.stringify(gotCitiesArr);
    var textnode = document.createTextNode(gotCitiesArr);
    document.getElementById("k1d").appendChild(textnode);
}

function k2() {
    let bestThingArr = bestThing.split(',');
    // gotCitiesEle.textContent = JSON.stringify(gotCitiesArr);
    var textnode = document.createTextNode(bestThingArr);
    document.getElementById("k2d").appendChild(textnode);
}

function k3() {
    let gotCitiesArr = gotCitiesCSV.split(',');
    var textnode = document.createTextNode(gotCitiesArr);
    document.getElementById("k3d").appendChild(textnode);
}
