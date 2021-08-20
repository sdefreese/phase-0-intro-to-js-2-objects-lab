// Write your solution in this file!
const employee= {
    name: "Sam",
    streetAddress: "123 Main",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    };
  }

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
  return obj;
}
function deleteFromEmployeeByKey(obj, key, value) {
    return {
        ...obj,
      [key]: value,
    };
    delete employee[key]
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
   delete employee[key];
   return obj;
}
