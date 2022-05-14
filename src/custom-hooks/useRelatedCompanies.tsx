import { useEffect } from "react";
import {CompaniesWithRelatedUsers, Employees, Gender, SalaryCost, TableCompaniesWwithRelatedUsers} from "../promises/interfaces";
import {getCompanies, getUsers} from "../promises/promises";

export const useRelatedCompanies = () => {
    const [relatedCompanies, setRelatedCompanies] = useState<TableCompaniesWithRelatedUsers>([]);
    useEffect (() => {
        Promise.all([
            getUsers(),
            getCompanies(),

        ]).then(([emloyees, companies ]) => {
            const relation = companies.map((company) => {
                const companyWithEmployees: CompaniesWithRelatedUsers = {
                    ...company,
                    employees: company.employees.map((id) => Employees.find(employee => employee.id === id)!),

                };
                return companyWithEmployees(relation);
            });
            setRelatedCompanies(relation);
        });
    },[]);
    return [relatedCompanies];
}

export const useInactiveUsers = (companies: TableCompaniesWwithRelatedUsers) => {
    const [inactiveUsers, setInactiveusers] = useState<Array<Employees>>([]);
    useEffect(() => {
        const activeCompanies = companies.filter((company) => company.status === )
    })
}