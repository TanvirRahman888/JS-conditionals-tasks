var avgMarks=9;
if (avgMarks>=90 && avgMarks <=100) {
    console.log("A"); 
} else if(avgMarks>=80 && avgMarks <=89)
{
    console.log("B")   
}
else if(avgMarks>=70 && avgMarks <=79)
{
    console.log("C")   
}else if(avgMarks>=60 && avgMarks <=69)
{
    console.log("D")   
}else if(avgMarks>=50 && avgMarks <=59)
{
    console.log("E")   
}else if(avgMarks>=0 && avgMarks <=49)
{
    console.log("Try Again")   
}
else{
    console.log("Wrong Input")
}