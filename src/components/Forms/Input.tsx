import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return (
    <input
      className=" bg-zinc-900 text-zinc-500 rounded text-sm font-roboto py-3 px-4"
      {...props}
    />
  );
};
