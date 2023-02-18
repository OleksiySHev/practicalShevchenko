const name_month = ["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];
const name_season = ["Зима","Весна","Літо","Осінь"];

let month = prompt();
month -=1
if(month <= 0){
    alert("Немає такого місяця");
}else if(month < 2 || month == 12){
    alert(name_month[month]+" "+name_season[0])
}else if(month < 5 || month == 3){
    alert(name_month[month]+" "+name_season[1])
}else if(month < 8 || month == 6){
    alert(name_month[month]+" "+name_season[2])
}else if(month < 11 || month == 9){
    alert(name_month[month]+" "+name_season[3])
}