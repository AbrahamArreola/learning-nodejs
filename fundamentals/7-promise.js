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

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeeDB = employees.find( employee => employee.id === id);

        if(!employeeDB){
            reject(`Employee with id ${id} does not exist`);
        }
        else{
            resolve(employeeDB);
        }
    });
};

let getSalary = (employee) => {

    return new Promise((resolve, reject) => {
        let salaryDB = salaries.find(salary => salary.id === employee.id);

        if(!salaryDB){
            reject(`There is no salary for user ${employee.name}`)
        }
        else{
            resolve({name: employee.name, salary: salaryDB.salary});
        }
    });
};

getEmployee(1).then((employeeDB) => {
    getSalary(employeeDB).then((resp) => {
        console.log(resp);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
});