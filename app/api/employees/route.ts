import { db } from "@/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { fname, onames, phone, email, state, city, address } = await req.json();

            // check if employee already exist
            const existsEmployee = await db.employee.findUnique({
                where: {
                    email
                }
            });
    
            if (existsEmployee) {
                return NextResponse.json({
                    data: null,
                    message: "Employee Already Exists"
                }, { status: 409 })
            }
    
            const addEmployee = await db.employee.create({
                data: {
                    fname, onames, phone, email, state, city, address
                }
            })

        console.log(addEmployee);
        return NextResponse.json({
            data: addEmployee,
            message: "Employee created successfully"
        }, { status:201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create employee",
            error
        }, { status:500 });
    }
}

export async function GET(){
    try {
        const employees = await db.employee.findMany({
            orderBy: {
                id: "asc"
            }
        });
        return NextResponse.json(employees);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch employees",
            error
        }, { status:500 });
    }
}