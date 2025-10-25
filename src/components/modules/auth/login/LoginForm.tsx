"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "./loginValidation";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleReCaptcha = (value: string | any) => {
    console.log("Captcha value:", value);
  };
  return (
    <div className="border-2 border-gray-300 rounded-xl max-w-md w-full p-5">
      <div className="flex items-center space-x-4 ">
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">Welcome back</p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-3 w-full">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY ?? ""}
              onChange={handleReCaptcha}
              className="mx-auto"
            />
          </div>

          <Button type="submit" className="mt-5 w-full">
            {isSubmitting ? "Logging" : "Login"}
          </Button>
        </form>
      </Form>

      <p className="text-sm text-gray-600 text-center my-3">
        Don no have any accout?
        <Link href="/register" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
