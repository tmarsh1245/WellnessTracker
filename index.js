const logs = [
    {
        date: "08/18/19",
        overall: 6,
        food: 6,
        activity: 8,
        medsMorning: "Yes",
        medsEvening: "Yes",
        dailyDiet: "Breakfast: Toast with PB, banana. Lunch: Turkey Sausage and egg with avo and spinach. Dinner: Apple, Naan, Chili. Cheated with a beer and a cannoli.",
        dailyMovement: "Ran two miles and stretched with core"
    },
    {
        date: "08/17/19",
        overall: 4,
        food: 5,
        activity: 3,
        medsMorning: "No",
        medsEvening: "Yes",
        dailyDiet: "Eggs benedict in the morning with potatoes, pizza and spinach at night, coffee with cream",
        dailyMovement: "Walked a lot in the morning and then stuck in car for the rest of the day"
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
            '<td>' + object.dailyDiet + '</td>' +
            '<td>' + object.dailyMovement + '</td>';
        table.appendChild(tr);
    })
}

function addRow() {
    let table = document.getElementById("WellnessTable");
    let tr = document.insertRow(1);
    let form = document.getElementById("newLogForm");
    for(let i = 0; i < 8; i++){
        tr.insertCell(0).appendChild(form.elements[i].value);
    }
}