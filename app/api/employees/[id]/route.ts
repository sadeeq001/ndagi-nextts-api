import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface PageProps {
  params: {
    id: string;
  };
}

export async function GET({ params }: PageProps) {
  try {
    const { id } = await params
    const employee = await db.employee.findUnique({
      where: {
        id: id
      }
    });

    if (!employee) {
      return NextResponse.json(
        { message: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(employee);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch employee", error },
      { status: 500 }
    );
  }
}

export async function DELETE({ params }: PageProps) {
  try {
    const { id } = await params;
    const existingEmployee = await db.employee.findUnique({
      where: {
        id: id
      }
    });

    if (!existingEmployee) {
      return NextResponse.json(
        { message: "Employee not found" },
        { status: 404 }
      );
    }

    const deletedEmployee = await db.employee.delete({
      where: {
        id: id
      }
    });

    return NextResponse.json(deletedEmployee);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete employee", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, { params }: PageProps) {
  try {
    const { id } = await params;
    // Parse the request body as JSON
    const { fname, onames, phone, email, state, city, address } = await req.json();

    // Check if the employee exists
    const existingEmployee = await db.employee.findUnique({
      where: {
        id: id  // Assuming `id` is available and correctly passed
      }
    });

    if (!existingEmployee) {
      return NextResponse.json(
        { message: "Employee not found" },
        { status: 404 }
      );
    }

    // Update the employee data
    const updatedEmployee = await db.employee.update({
      where: {
        id: id  // Using the `id` to find the employee
      },
      data: {
        fname,
        onames,
        phone,
        email,
        state,
        city,
        address,
      }
    });

    // Return the updated employee information
    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update employee", error },
      { status: 500 }
    );
  }
}
