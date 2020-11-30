let tags = ['html', 'javascript', 'css', 'json', 'css', 'xml', 'css', 'html', 'json'];


//first exercise: Convert all tags to uppercase
function Converter(tags) {
    let newTags = tags.map((element) => {
        return element.toUpperCase();
    });
    return newTags;
}
let newArrayForExercise1 = Converter(tags);
console.log("original array => ");
console.log(tags);
console.log("new array for exercise one => ");
console.log(newArrayForExercise1);



//second exercise: Exclude all xml and json tags
function ExcludeMe(tags) {
    let newTags = tags.filter((element) => {
        return !(element === "xml" || element === "json");
    });
    return newTags;
}
let newArrayForExercise2 = ExcludeMe(tags);
console.log("original array => ");
console.log(tags);
console.log("new array for exercise two => ");
console.log(newArrayForExercise2);


// Third exercise: Use reduce() method to return an object that contains tags count as follows:
// {HTML: 2, JAVASCRIPT: 1, CSS: 3}
function createObject(tags) {
    let newTags = tags.filter((element) => {
        return !(element === "xml" || element === "json");
        //["html", "javascript", "css", "css", "css", "html"]
    }).map((element) => {
        return element.toUpperCase();
        // ["HTML", "JAVASCRIPT", "CSS", "CSS", "CSS", "HTML"]
    }).reduce((x, y) => {
        x[y] = (x[y] || 0) + 1;
        console.log(x)
        console.log(x[y])
        return x;
    }, {})
    return newTags;
}
let newObjectForExercise3 = createObject(tags);
let x, result = "";
for (x in newObjectForExercise3) {
    result += x + "  =  " + newObjectForExercise3[x] + " |  ";
};
document.getElementById("result").innerHTML = result
console.log("original array => ");
console.log(tags);
console.log("for exercise three => ");
console.log(newObjectForExercise3);