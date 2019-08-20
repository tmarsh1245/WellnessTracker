const logs = [
    {
        date: "08/19/19",
        overall: 6,
        food: 5,
        activity: 3,
        medsMorning: "No",
        medsEvening: "Yes",
        breakfast: "PB Toast, banana",
        lunch: "chicken and rice",
        dinner: "Chinese food and juice",
        dailyMovement: "No real exercise",
        workShift: "5:20-10:20"
    },
    {
        date: "08/18/19",
        overall: 6,
        food: 6,
        activity: 8,
        medsMorning: "Yes",
        medsEvening: "Yes",
        breakfast: "PB Toast, banana",
        lunch: "Turkey Sausage and egg with avo and spinach",
        dinner: "Apple, Naan, Chili. Cheated with a beer and a cannoli.",
        dailyMovement: "Ran two miles and stretched with core",
        workShift: "8:30-4"
    },
    {
        date: "08/17/19",
        overall: 4,
        food: 5,
        activity: 3,
        medsMorning: "No",
        medsEvening: "Yes",
        breakfast: "Eggs benedict in the morning with potatoes",
        lunch: "",
        dinner: "Pizza and spinach .",
        dailyMovement: "Walked a lot in the morning and then stuck in car for the rest of the day",
        workShift: "8:30-4"
    }
    ]

function loadTable() {
    let table = document.getElementById("WellnessTable");
    logs.forEach(function (object) {
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
            '<td>' + object.dailyMovement + '</td>' +
            '<td>' + object.workShift + '</td>';
        table.appendChild(tr);
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
