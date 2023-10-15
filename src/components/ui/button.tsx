import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import useRipple from "use-ripple-hook";

interface ButtonTypes extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ className, disabled, ...props }: ButtonTypes) {
  const [ripple, event] = useRipple();

  return (
    <button
      ref={ripple}
      onMouseDown={event}
      disabled={disabled}
      {...props}
      className={twMerge(
        "bg-shoeDark text-shoeBackground rounded-md px-4 py-2",
        className
      )}
    />
  );
}
