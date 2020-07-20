/* setTimeout(() => {
    console.log("Hello world");
}, 3000); */

let getUserById = (id, callback) => {

    let user = {
        name: "Abraham",
        id
    };

    if(id === 5){
        callback(`The user with id ${id} does not exist in the database`);
    }
    else{
        callback(null, user);
    }   
}

getUserById(5, (err, user) => {
    if(err){
        console.log(err);
        return;
    }

    console.log("Database user: ", user);
});