import React from 'react'
import { getData } from '@/lib/getData';
import EmployeesTable from '@/components/front/employeesTable';
import { Employee } from '@/lib/types';

// Set proper dynamic behavior for the route
export const dynamic = 'force-dynamic';

export default async function page() {
    const employeesData: Employee[] = await getData("employees");

    return (
        <div className="">
            <EmployeesTable employees={ employeesData } />
        </div>
    )
}
