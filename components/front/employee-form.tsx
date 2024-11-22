"use client";

import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextAreaInput from '@/components/FormInputs/TextAreaInpunt';
import TextInput from '@/components/FormInputs/TextInput';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { Mail, Phone, Send, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { DialogClose } from "@/components/ui/dialog";

export type EmployeeProps = {
  id: string | undefined;
  fname: string;
  onames: string;
  phone: string;
  email: string;
  state: string;
  city: string;
  address: string;
};

interface EmployeeFormProps {
  employee?: EmployeeProps;
  onSuccess?: () => void;
}

export default function EmployeeForm({ employee, onSuccess }: EmployeeFormProps) {
  const id = employee?.id ?? "";
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeProps>({
    defaultValues: {
      ...employee
    },
  });

  const router = useRouter();
  function redirect() {
    router.push("/employees");
  }

  async function onSubmit(data: EmployeeProps) {
    if (id) {
      makePutRequest(setLoading, `api/employees/${data.id}`, data, "Employee", redirect);
    }
    else {
      makePostRequest(setLoading, "api/employees", data, "Employee", reset, redirect);
    }
    if (onSuccess) {
      onSuccess();
    }
  }

  return (

    <form className="grid gap-4 sm:grid-cols-3 sm:gap-6 -mt-8" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="First Name"
        register={register}
        name="fname"
        errors={errors}
        placeholder="eg John Doe"
        icon={User}
      />

      <TextInput
        label="Other Names"
        register={register}
        name="onames"
        errors={errors}
        placeholder="eg John Doe"
        icon={User}
      />

      <TextInput
        label="Phone Number"
        register={register}
        name="phone"
        type="tel"
        errors={errors}
        placeholder=""
        icon={Phone}
      />

      <TextInput
        label="Email Address"
        register={register}
        name="email"
        type="email"
        errors={errors}
        placeholder="Eg. johndoe@gmail.com"
        icon={Mail}
      />

      <TextInput
        label="State"
        register={register}
        name="state"
        errors={errors}
        placeholder="eg Kaduna"
        icon={User}
      />

      <TextInput
        label="City"
        register={register}
        name="city"
        errors={errors}
        placeholder="eg Zaria"
        icon={User}
      />

      <TextAreaInput
        label="City"
        register={register}
        name="address"
        errors={errors}
      />

      <SubmitButton
        title={id ? "Update Employee" : "Create Employee"}
        buttonIcon={Send}
        loading={loading}
        loadingTitle={id ? "Updating Account, please wait..." : "Creating Account, please wait..."}
      />
    </form>
  )
}
