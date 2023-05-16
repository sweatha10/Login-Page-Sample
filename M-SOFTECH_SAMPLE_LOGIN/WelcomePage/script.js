function displayuname() {
    var getusernam = sessionStorage.getItem("userName") ;
    document.getElementById("nameatribute").innerHTML = getusernam;

// if (sessionStorage.getItem("userName")) {
//     window.location.href = "../WelcomePage/target.html";
// } else {
//     window.location.href = "../LoginPage/index.html";
// }
    
    // console.log(sessionStorage.getItem("userName"));
}

// function highlightrow() {
//     var storedname = sessionStorage.getItem("userName");
//     var rows = document.getElementsByTagName("tr");
//     var newtable = "";

//     for (let i = 0; i < rows.length; i++) {
//         var cells = rows[i].getElementsByTagName("td");
//         var hilightrow = '<tr>';
//         var hidhlighting = false;

//         for (let j = 0; j < cells.length; j++) {
//             var cellvalue = cells[j].innerText;
//             if (cellvalue === storedname) {
//                 hidhlighting = true;
//             }
//             hilightrow += '<td>' + cellvalue + "</td>";
//         }
//         hilightrow += '</tr>';

//         if (hidhlighting) {
//             hilightrow = hilightrow.replace("<tr>", '<tr class="highlight">')
//         }
//         newtable += hilightrow;
//     }
//     var table = document.getElementById("jsontable");
//     table.innerHTML = newtable;
// }

function highlight() {
    var storedname = sessionStorage.getItem("userName");
    document.getElementsByClassName(storedname)[0].classList.add("higlight");
}

function getjson() {
    var table = document.getElementById("table-cont");
    if (table.style.display !== "block") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
    fetch('../assets/jsonfiles/data.json').then(response => response.json())
        .then(data => {
            var headers = Object.keys(data.data[0]).filter(header => header !== 'id');
            var headerrow = '<tr>';
            for (var i = 0; i < headers.length; i++) {
                headerrow += '<th>' + firstlttrcapital(headers[i]) + '</th>';
            }
            headerrow += '</tr>';

            var allrecords = '';
            for (var i = 0; i < data.data.length; i++) {
                allrecords += '<tr>';
                for (var j = 0; j < headers.length; j++) {
                    var header = headers[j];
                    if (header === 'avatar') {
                        allrecords += '<td><img src="' + data.data[i][header] + '"></td>';
                    } else {
                        allrecords += '<td class="'+ data.data[i][header] + '">' + data.data[i][header] + '</td>';
                    }

                }
                allrecords += '</tr>';
            }

            var table = document.getElementById("jsontable");
            table.innerHTML = headerrow + allrecords;
            highlight();

        })
        .catch(error => {
            console.error('Error in JSON file', error);
        });
}

function firstlttrcapital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

window.onload = function uploadData() {
    var table = document.getElementById("jsontable");

var formdata = sessionStorage.getItem("formdata");

if (formdata) {
    var formobject = JSON.parse(formdata);
     var row = '<tr>';

     for (const key in formobject) {
        var cell = '<td>' + formobject[key] + '</td>';
        row += cell;
     }

     row += '</tr>';
     table.innerHTML += row;
}
}
