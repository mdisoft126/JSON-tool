fetch('./person/person.txt')
    .then(response => response.text())
    .then(data => myPerson(data))

function myPerson(data) {
    console.log(data);
    var lines = data.split('\n');
    console.log(lines);
    var person = [];
    for(var i = 1; i < lines.length; i++) {
        var values = lines[i].split('\t');
        console.log(values);
        person[i -1] = {no : values[0], userid : values[1], companyid : values[2]};
        console.log(person);
        var personString = JSON.stringify(person);
    }
    document.getElementById("api").innerHTML = personString;
}