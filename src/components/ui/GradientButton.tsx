
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "font-medium px-6 py-3 rounded-full transition-all duration-300 ease-in-out",
          variant === "primary" 
            ? "bg-primary-gradient text-white hover:shadow-md" 
            : "border-2 border-explainly-teal text-explainly-navy hover:bg-explainly-lightGray",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
