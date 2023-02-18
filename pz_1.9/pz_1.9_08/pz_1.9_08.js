const day_week = ["Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота","Неділя"];

let week = prompt();
if(week == 1){
    alert(day_week[0]);
}else if(week == 2){
    alert(day_week[1]);
}else if(week == 3){
    alert(day_week[2]);
}else if(week == 4){
    alert(day_week[3]);
}else if(week == 5){
    alert(day_week[4]);
}else if(week == 6){
    alert(day_week[5]);
}else if(week == 7){
    alert(day_week[6]);
}else{
    alert("Не існує!");
}