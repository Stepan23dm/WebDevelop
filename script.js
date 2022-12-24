function Getresult() {
    let firstName = document.getElementById('FirstName').value;
    let secondName = document.getElementById('SecondName').value;
    if (firstName != '' && secondName != ''){
        let result = Math.floor(Math.random(100) * 100) + 1;
        alert(`${firstName} подходит к ${secondName} на ${result} процентов!`);
    }else{
        alert("Enter name!");
    }
}

function IBM(){
    let growth = document.getElementById('growth').value;
    let heft = document.getElementById('heft').value;
    if (growth != '' && heft != ''){
        let result = heft / (Math.pow((growth / 100), 2)).toFixed(1);
        if (result <= 18.5){
            alert("Недостаточный вес");
        }else if (result <= 25) {
            alert("Нормально");
        }else if (result <= 30) {
            alert("У вас излишек веса");
        }else if (result > 30) {
            alert("Ожирение");
        }
    }else{
        alert("Enter name!");
    }
}

function Year() {
    let year = document.getElementById('year').value;
    if (year != ''){
        try{
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
                alert("Високосный год");
            }else alert("Не является високосным");
        }catch (err){
            alert(err);
        }
    }else alert("Enter year!") 
    
}

function Name(){
    var massiv = ['Дима', 'Катя', 'Петр', 'Лена'];
    var rand = Math.floor(Math.random() * massiv.length);
    alert(`Оплачивать будет ${massiv[rand]}`);
}