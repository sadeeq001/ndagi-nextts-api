import EmployeeForm from '@/components/front/employee-form';
import { getData } from '@/lib/getData';
import { PageProps } from '@/lib/types';
import React from 'react'

export default async function page({ params }: PageProps) {
  const { id } = params; // No need to await params, as it's already resolved
  // Make sure params are resolved and then fetch the employee data
  const employee = await getData(`employees/${id}`);
  //console.log(params.id);
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Update Employee
          </h1>
          <EmployeeForm employee={ employee } />
        </div>
      </div>
    </div>
  </section>
  )
}
