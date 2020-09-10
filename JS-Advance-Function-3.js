function solve(data, criteria) {
    let splitCriteria = criteria.split("-");
    let input = JSON.parse(data);
    let id = 0
    if (criteria ==="all"){
        input.forEach(element => {
        console.log(`${id}. ${element.first_name} ${element.last_name} - ${element.email}`);
        id = id + 1
    });
}
    else {input.forEach(element => {
        for (let key in element) {
            if (key === splitCriteria[0]) {
                if (element[key] === splitCriteria[1]){
                    console.log(`${id}. ${element.first_name} ${element.last_name} - ${element.email}`);
                    id = id + 1
                }
            }
        }
    });
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')