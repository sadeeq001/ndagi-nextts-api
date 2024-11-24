"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { getData } from '@/lib/getData';
import { makeDeleteRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';
import EmployeeForm from './employee-form';

type EmployeeProps = {
    id: string;
    fname: string;
    onames: string;
    phone: string;
    email: string;
    state: string;
    city: string;
    address: string;
}

export default function EmployeesTable({ employees }: { employees: EmployeeProps[] }) {

    const [loading, setLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<EmployeeProps | null>(null);

    const router = useRouter();
    const redirect = () => {
        router.push("/employees"); // Redirect to /employees page
      };

      const handleDialogClose = () => {
        setIsDialogOpen(false)
        setSelectedEmployee(null)
        router.refresh() // Refresh the page to update the table data
      }

    const handleDelete = async (id: string) => {
        await getData(`employees/${id}`);
        makeDeleteRequest(setLoading, `api/employees/${id}`, id, "Employee", redirect);
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                All Employees
                            </h1>
                            <Link href="/employees/create">
                                <button className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Create Employee</button>
                            </Link>
                        </div>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>S/N</TableHead>
                                    <TableHead>First Name</TableHead>
                                    <TableHead>Other Names</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>State</TableHead>
                                    <TableHead>City</TableHead>
                                    <TableHead>Address</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {employees.map((employee, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{employee.fname}</TableCell>
                                        <TableCell>{employee.onames}</TableCell>
                                        <TableCell>{employee.phone}</TableCell>
                                        <TableCell>{employee.email}</TableCell>
                                        <TableCell>{employee.state}</TableCell>
                                        <TableCell>{employee.city}</TableCell>
                                        <TableCell>{employee.address}</TableCell>
                                        <TableCell>
                                        <div className="flex justify-between space-x-2">
                                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" className="mr-2" onClick={() => setSelectedEmployee(employee)}>
                                                        Update
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className={"max-h-screen overflow-y-auto md:max-h-screen lg:max-w-screen-md"}>
                                                    <DialogHeader className="pb-14">
                                                        <DialogTitle>Update Employee</DialogTitle>
                                                    </DialogHeader>
                                                    {selectedEmployee && (
                                                        <EmployeeForm employee={ selectedEmployee || undefined } onSuccess={handleDialogClose} />
                                                    )}
                                                </DialogContent>
                                            </Dialog>
                                            <Button variant="destructive" onClick={() => handleDelete(employee.id)}>
                                                Delete
                                            </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}