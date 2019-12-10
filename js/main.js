"use strict";

/*Fetching JSON Data
Author:John Fleurimond
LIC:
*/

alert("Hi");



// async function fetchJSON() {
//   alert("Hello Fetching JSON");

//   await fetch("./CDPstations.json")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     appendData(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
    
//   return fetchJSON;
// }
var data = {
  "clients": {
    "company": "CDP",
    "stations": [
      {
        "title": "DPTV (WTVS-Detroit)",
        "description": "WTVS, virtual channel 56, is a Public Broadcasting Service member television station licensed to Detroit, Michigan, United States. The station is owned by the Detroit Educational Television Foundation.",
        "logo": "https://bento.cdn.pbs.org/hostedbento-prod/filer_public/logos-dptv/DetroitPublicTV.png",
        "address": {
          "street": "1 Clover Ct",
          "city": "Wixom",
          "state": "Michigan",
          "zip": "48393"
        }
      },
      {
        "title": "WyomingPBS (KCWS)",
        "description": "Wyoming PBS is the Public Broadcasting Service member network in the state of Wyoming. It currently consists of flagship KCWC-DT, channel 4 in Riverton; full-power satellites KWYP-DT, channel 8 in Laramie and KPTW, channel 6 in Casper; and over 35 low-power translator stations across the state.",
        "logo": "http://www.wyomingpbs.org/images/wyoming-pbs-logo-home.jpg",
        "address": {
          "street": "2660 Peck Ave",
          "city": "Riverton",
          "state": "Wyoming",
          "zip": "82501"
        }
      },
      {
        "title": "KLVX (Vegas PBS)",
        "description": "KLVX, virtual channel 10, is a Public Broadcasting Service member television station licensed to Las Vegas, Nevada, United States. The station is owned by the Clark County School District, and is the flagship member of the district's communications arm, the KLVX Communications Group.",
        "logo": "https://image.pbs.org/bento3-prod/klvx-bento-live-pbs/vegas_pbs/newsroom/photos/53f5fca371_VegasPBS-50thAnniversary-Logo-4c.jpg",
        "address": {
          "street": "3050 E. Flamingo Road",
          "city": "Las Vegas",
          "state": "Nevada",
          "zip": "89121"
        }
      },
      {
        "title": "KUHT (HPMF-Houston Public Media)",
        "description": "KUHT, virtual and VHF digital channel 8, is a Public Broadcasting Service member television station licensed to Houston, Texas, United States. Owned by the University of Houston System, it is sister to National Public Radio member station KUHF.",
        "logo": "https://cdn.hpm.io/assets/images/HPM_UH_ConnectivityLogo_OUT.jpg",
        "address": {
          "street": "4343 Elgin",
          "city": "Houston",
          "state": "Texas",
          "zip": "77204"
        }
      },
      {
        "title": "SOPTV (Southern Oregon)",
        "description": "Southern Oregon Public Television is the Public Broadcasting Service member network for most of the southwest region of the U.S. state of Oregon. It operates KSYS in Medford and full-time satellite KFTS in Klamath Falls. Studios are located on South Fir Street in downtown Medford.",
        "logo": "http://www.soptv.org/wp-content/themes/soptv/assets/img/soptv-logo.png",
        "address": {
          "street": "28 South Fir Street, Ste. 200",
          "city": "Medford",
          "state": "Oregon",
          "zip": "97501"
        }
      }
    ]
  }
} 

//Loop through every object in our JSON object
function appendData(data) {
  //Get the div element from the body

  alert("Hello");
  console.log("Hi");

  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "clients: " + data[i].clients.company.stations;
    mainContainer.appendChild(div);
  }
  return appendData;
}

//                         Moment.js
var Now = moment().format("MMMM Do YYYY, h:mm:ss a");
var x = document.getElementById("msgdiv");
x.innerHTML = Now;
