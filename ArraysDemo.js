var data = ["India", 'USA', 'UK', "France", 45050];
console.log(data);
data.push("japan");
console.log(data);
data.push(2000);
console.log(data);
//data.push(true); becoz data[] is the type of stringa nd number
var arr = ["India", 'USA', 'UK', "France"];
arr.forEach(function (element) {
    if (element.startsWith('U')) {
        console.log(element);
    }
});
