//Problem 1
let text = '{"employees" : [' +
    '{"firstName":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligiblity":"true"},' + 
    '{"firstName":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500", "raiseEligiblity":"true"},' + 
    '{"firstName":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligiblity":"false"} ]}';

    const obj = JSON.parse(text);

    // console.log(obj);
    console.log(obj["employees"])

//Problem 2
let comp = '{"company" : [' +
    '{"companyName":"Tech Stars" , "website":"www.techstars.site" , "employees": [' +
    '{"firstName":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligiblity":"true"},' + 
    '{"firstName":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500", "raiseEligiblity":"true"},' + 
    '{"firstName":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligiblity":"false"}, ' +
    '{"firstName":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600", "raiseEligiblity":"false"} ' +
    '] }]}';

    const compObj = JSON.parse(comp);
    console.log(compObj["company"][0]);

//Problem 3
const newEmployee = {"firstName":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600", "raiseEligiblity":"false"};
obj.employees.push(newEmployee);

// const updatedText = JSON.stringify(obj);
// console.log(updatedText);

//Problem 4
let totalSalary = 0;
obj.employees.forEach(employee => {
    const salary = parseInt(employee.salary);
    if(!isNaN(salary)) {
        totalSalary += salary;
    }
});

console.log('The companies total salary is $' + totalSalary);

//Problem 5
function updateSalary(obj) {
    if(!obj || !obj.employees || !Array.isArray(obj.employees)) {
        console.log('Invalid object or employees array');
        return null;
    }
    for (let i = 0; i < text.length; i++) {
        const employee = obj.employees[i];
        //console.log(employee.raiseEligiblity);
        if(employee.raiseEligiblity == "true") {
            console.log(employee.firstName + " is eligible for a raise!");
            //console.log('hit');
            const salary = Number(employee.salary);

            if (!isNaN(salary)) {
                //console.log('I made it here');
                employee.salary = salary * 1.1;
                employee.raiseEligiblity = "false";
                console.log(employee.salary);
                //console.log(employee.raiseEligiblity);
            } 
        }
        else{
            console.log(employee.firstName + " is not eligible for a raise!");
        }
        // console.log('miss');
    }
    return obj;
}

const originalObj = JSON.parse(text);
const updatedObj = updateSalary(obj);
console.log('this is question 5');
console.log(obj["employees"]);

console.log(updatedObj);

//Problem 6

// const workStatus = obj.employees.map((employees) => {
//     let wfh = "false";
//     if (employees.firstName == 'Anna' || employees.firstName == 'Sam') {
//         wFh = "true";
//     }
//     return {
//         ...employees,
//         wFh: wfh,
//     };
// });

// console.log(workStatus);

let ws = '{"WorkStatus" : [' +
    '{"firstName":"Sam" , "department":"Tech" , "designation":"Manager" , "salary":"40000" , "raiseEligiblity":"true" , "wfh":"true"},' + 
    '{"firstName":"Mary" , "department":"Finance" , "designation":"Trainee" , "salary":"18500", "raiseEligiblity":"true" , "wfh":"false"},' + 
    '{"firstName":"Bill" , "department":"HR" , "designation":"Executive" , "salary":"21200" , "raiseEligiblity":"false" , "wfh":"false"}, ' +
    '{"firstName":"Anna" , "department":"Tech" , "designation":"Executive" , "salary":"25600", "raiseEligiblity":"false" , "wfh":"true"} ' +
    '] }]}';

    const wsObj = JSON.parse(text);

    // console.log(obj);
    console.log(wsObj["WorkStatus"])