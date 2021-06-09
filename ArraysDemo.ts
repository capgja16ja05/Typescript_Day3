let data = ["India",'USA','UK',"France",45050];
console.log(data);
data.push("japan");
console.log(data);
data.push(2000);
console.log(data);
//data.push(true); becoz data[] is the type of stringa nd number


let arr:string[] = ["India",'USA','UK',"France"];
arr.forEach(element=>{
    if(element.startsWith('U'))
    {
        console.log(element);
    }
});