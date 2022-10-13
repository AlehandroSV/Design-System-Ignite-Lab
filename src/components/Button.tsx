import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <Comp
        className={clsx(
          "py-4 px-3 rounded font-semibold text-sm w-full transition-colors focus:ring-2 bg-cyan-500 hover:bg-cyan-300 text-black ring-white"
        )}
      >
        {children}
      </Comp>
    </>
  );
}
