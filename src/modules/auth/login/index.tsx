"use client";

import { z } from "zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LabelInput } from "@/components/common/label-input";
import { ErrorText } from "@/components/common/error-text";
import { Button } from "@/components/ui/button";
import { RememberMe } from "./remember-me";
import { loginSchema } from "../schema";
import { Options } from "../options";

type formData = z.infer<typeof loginSchema>;

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <React.Fragment>
      <h1 className="text-3xl text-headingText text-center mb-4 font-bold">
        Login
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelInput label="Email" type="text" name="email" control={control}>
          {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
        </LabelInput>

        <LabelInput
          label="Password"
          type="password"
          name="password"
          control={control}>
          {errors.password && <ErrorText>{errors.password?.message}</ErrorText>}
        </LabelInput>

        <RememberMe name="rememberMe" control={control} />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
      <Options type="LOGIN" />
    </React.Fragment>
  );
};
