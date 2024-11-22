

import React from 'react'
import { getData } from '@/lib/getData';
import EmployeesTable from '@/components/front/employeesTable';

export default async function page() {
    const employeesData = await getData("employees");

    return (
        <div className="">
            <EmployeesTable employees={ employeesData } />
        </div>
    )
}
