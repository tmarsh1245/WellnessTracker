function loadTable() {
    fetch(`/api/logs`).then(response => 
        {
            if(response.ok){
                response.json().then(data => {
                    console.log("Total number of logs: ", data._rowsOfLogs.totalLogs)
                    console.log(data.records)
                    let table = document.getElementById("WellnessTable");
                    data.records.forEach(function (object) {
                        let tr = document.createElement('tr');
                        tr.innerHTML = '<td>' + object.date + '</td>' +
                            '<td>' + object.overall + '</td>' +
                            '<td>' + object.food + '</td>' +
                            '<td>' + object.activity + '</td>' +
                            '<td>' + object.medsMorning + '</td>' +
                            '<td>' + object.medsEvening + '</td>' +
                            '<td>' + object.breakfast + '</td>' +
                            '<td>' + object.lunch + '</td>' +
                            '<td>' + object.dinner + '</td>' +
                            '<td>' + object.exercise + '</td>' +
                            '<td>' + object.timeFrom + " to " + object.timeTo + '</td>';
                        table.appendChild(tr);
                    })
                })
            }
        })
}

function addRow() {
    let table = document.getElementById("WellnessTable");
    let tr = table.insertRow(1);
    let form = document.getElementById("newLogForm");
    for(let i = 0; i < 8; i++){
        tr.insertCell(0).appendChild(form.elements[i].value);
    }
}
