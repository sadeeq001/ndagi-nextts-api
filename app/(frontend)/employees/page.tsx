import React from 'react'
import { getData } from '@/lib/getData';
import EmployeesTable from '@/components/front/employeesTable';
import { Employee } from '@/lib/types';

export default async function page() {
    const employeesData: Employee[] = await getData("employees");

    return (
        <div className="">
            <EmployeesTable employees={ employeesData } />
        </div>
    )
}

// Optional: You can specify revalidate to control caching for ISR
export const revalidate = 60;  // Revalidate this page every 60 seconds
