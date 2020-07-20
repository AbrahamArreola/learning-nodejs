let employees = [
    {
        id: 1,
        name: "Abraham"
    },
    {
        id: 2,
        name: "Carlos"
    },
    {
        id: 3,
        name: "Luis"
    }
];

let salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    },
];

let getEmployee = (id, callback) => {
    let employeeDB = employees.find( employee => employee.id === id);

    if(!employeeDB){
        callback(`Employee with id ${id} does not exist`);
    }
    else{
        callback(null, employeeDB);
        //Make sure you're calling the callback just one time
    }
};

let getSalary = (employee, callback) => {
    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if(!salaryDB){
        callback(`There is no salary for user ${employee.name}`)
    }
    else{
        callback(null, {name: employee.name, salary: salaryDB.salary});
    }
};

getEmployee(3, (err, employee) =>{
    if(err){
        return console.log(err);
    }

    getSalary(employee, (err, resp) =>{
        if(err){
            return console.log(err);
        }
    
        console.log(`${resp.name}'s salary is ${resp.salary}`);
    });
});