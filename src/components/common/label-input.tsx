import * as React from "react";
import { Input } from "../ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface LabelInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  children?: React.ReactNode;
  control: Control<T>;
}

export const LabelInput = <T extends FieldValues>({
  children,
  control,
  name,
  type = "text",
  label,
}: LabelInputProps<T>) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-normalText">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} type={type} />}
      />
      {children}
    </div>
  );
};
