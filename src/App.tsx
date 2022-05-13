/*
const getUsers = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([
              { id: 1, name: 'Antonio', gender: 'male', status: 'active', salary: 1000 },
              { id: 2, name: 'Rosa', gender: 'female', status: 'active', salary: 1000 },
              { id: 3, name: 'Joseph', gender: 'male', status: 'inactive', salary: 2000 },
              { id: 4, name: 'Lisa', gender: 'female', status: 'active', salary: 2000 },
              { id: 5, name: 'Gwen', gender: 'female', status: 'inactive', salary: 3000 },
              { id: 6, name: 'Antonio', gender: 'male', status: 'inactive', salary: 3000 }
          ]);
      }, 1000);
  });
}

const getCompanies = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([
              { id: 1, name: 'Disney', employees: [1, 3], status: 'inactive' },
              { id: 2, name: 'Nestle', employees: [4], status: 'active' },
              { id: 3, name: 'Microsoft', employees: [2, 5, 6], status: 'active' }
          ]);
      }, 3000);
  });
}

export default getUsers;



 export const employees = [
  { id: 1, name: "Antonio", gender: "male", status: "active", salary: 1000 },
  { id: 2, name: "Rosa", gender: "female", status: "active", salary: 1000 },
  { id: 3, name: "Joseph", gender: "male", status: "inactive", salary: 2000 },
  { id: 4, name: "Lisa", gender: "female", status: "active", salary: 2000 },
  { id: 5, name: "Gwen", gender: "female", status: "inactive", salary: 3000 },
  { id: 6, name: "Antonio", gender: "male", status: "inactive", salary: 3000 }
];

const companies = [
  { id: 1, name: "Disney", employees: [1, 3], status: "inactive" },
  { id: 2, name: "Nestle", employees: [4], status: "active" },
  { id: 3, name: "Microsoft", employees: [2, 5, 6], status: "active" }
];

for (let i = 0; i < companies.length; i++) {
  const element = companies[i];

  for (let j = 0; j < element.employees.length; j++) {
    const employeeId = element.employees[j];

    element.employees[j] = employees.find((emp) => emp.id === employeeId);
  }
}

console.log(companies);


*/

const employeesData = [
  { id: 1, name: "Antonio", gender: "male", status: "active", salary: 1000 },
  { id: 2, name: "Rosa", gender: "female", status: "active", salary: 1000 },
  { id: 3, name: "Joseph", gender: "male", status: "inactive", salary: 2000 },
  { id: 4, name: "Lisa", gender: "female", status: "active", salary: 2000 },
  { id: 5, name: "Gwen", gender: "female", status: "inactive", salary: 3000 },
  { id: 6, name: "Antonio", gender: "male", status: "inactive", salary: 3000 },
];

const companyData = [
  { id: 1, name: "Disney", employees: [1, 3], status: "inactive" },
  { id: 2, name: "Nestle", employees: [4], status: "active" },
  { id: 3, name: "Microsoft", employees: [2, 5, 6], status: "active" },
];

const fill = (employees, compenies) => {
  return compenies.map((company) => {
    company.employees = company.employees.map((id) => employees[id - 1]);
    return company;
  });
};

const merge = fill(employeesData, companyData);

console.log(JSON.stringify(merge, null, 2));
