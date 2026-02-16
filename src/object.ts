type User = {
    id : number,
    name : string,
}

let user:User = {
    id : 123,
    name : "Maruf",
}

function printInfo(user:User):void{
    console.log(`Id : ${user.id} and Name : ${user.name} `)

}

printInfo(user)
printInfo({id : 124, name : "Alam"})