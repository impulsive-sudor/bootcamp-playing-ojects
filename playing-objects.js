// How would you print/log John's age?
// How would you print/log the name of the first object?
// How would you print/log the name and age of each user using a for loop?  Your output should look something like this

// Michael - 37
// John - 30
// David - 27


var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

console.log(users[1].age)
console.log(users[0].name)


function userlist(){
    for (let x = 0; x < users.length; x++) {
        console.log(users[x].name + ' - ' + users[x].age)
    }
}

userlist()