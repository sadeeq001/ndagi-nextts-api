import React from 'react'
import { getData } from '@/lib/getData';
import EmployeesTable from '@/components/front/employeesTable';
import { Employee } from '@/lib/types';

// Set proper dynamic behavior for the route
export const dynamic = 'force-dynamic';

export default async function page() {
    const employeesData: Employee[] | null = await getData("employees");

    if (!employeesData) {
        return <div>Error loading employees data. Please try again later.</div>
      }

    return (
        <div className="">
        {employeesData.length > 0 ? (
        <EmployeesTable employees={employeesData} />
        ) : (
            <div>No employees found.</div>
        )}
        </div>
    )
}
