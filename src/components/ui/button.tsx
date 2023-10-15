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
        "bg-zinc-950 text-white rounded-md px-4 py-2",
        className
      )}
    >
      Sample Button
    </button>
  );
}
