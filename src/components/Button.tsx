import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp
        className={clsx(
          "py-3 px-4 rounded font-semibold text-sm w-full transition-colors focus:ring-2 bg-cyan-500 hover:bg-cyan-300 text-black ring-white",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
}
