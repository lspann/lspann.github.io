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
    '{"companyName":"Tech Stars" , "website":"www.techstars.site" , "employees":"employees[1]"} ]}';

    const obj = JSON.parse(comp);
    
    // console.log(list["company"]["employees"])