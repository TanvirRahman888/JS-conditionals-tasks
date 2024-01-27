var day="Sunday";
var time=16;
if(day=="Friday" || day=="friday"){
    if(time>7 && time<=11){
        console.log("Kaca Bazar e jaw")
    }
    else if(time>11 && time<12){
        console.log("Gosol kore new.")
    }
    else if(time>=12 && time<=14){
        console.log("Namaj e jaw")
    }
    else if(time>14 && time<=17){
        console.log("Movie Dekho")
        if (time==16) {
            console.log("Muri khaw")            
        }
    }
    else if(time>17 && time<=24){
        console.log("Enjoy the Holy day")
    }
    else if (time>=0 && time <=7) {
        console.log("Sleep")
    }
    else{
        console.log("It's not a time")
    }

}
else{
    console.log("Beta Office er kaj e mon de")
}