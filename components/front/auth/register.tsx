"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import CustomCarousel from "../custom-carousel";
import Logo from "../logo";
import { Key, Mail, Phone, User } from "lucide-react";
import PasswordInput from "@/components/FormInputs/PasswordInput";
export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }
  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Full Name"
              register={register}
              name="fullName"
              errors={errors}
              placeholder="eg John Doe"
              icon={ User }
            />
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
              icon={ Mail }
            />
            <TextInput
              label="Phone Number"
              register={register}
              name="phone"
              type="tel"
              errors={errors}
              placeholder=""
              icon={ Phone }
            />
            <PasswordInput
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              icon={ Key }
            />

            <SubmitButton
              title="Sign In"
              loading={isLoading}
              loadingTitle="Creating Account, please wait..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
