import * as React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../../../components/ui/checkbox";

interface RememberMeType<T extends FieldValues> {
  name: Path<T>;
  login?: boolean;
  control: Control<T>;
}

export const RememberMe = <T extends FieldValues>({
  control,
  name,
  login = false,
}: RememberMeType<T>) => {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="flex items-center gap-2">
        <Controller
          name={name ?? "rememberMe"}
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked === true)}
            />
          )}
        />
        <label
          htmlFor="rememberMe"
          className="font-semibold text-xs text-normalText">
          Remember Me
        </label>
      </div>
      {login && (
        <h6 className="text-normalText font-semibold underline">
          Forgot Password
        </h6>
      )}
    </div>
  );
};
