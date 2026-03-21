import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-btn font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-brand-blue text-white hover:bg-blue-600 shadow-md hover:shadow-lg",
        secondary: "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-blue-50",
        promo: "bg-brand-gold text-brand-navy hover:bg-gold-200 shadow-md hover:shadow-lg",
        emergency: "bg-brand-coral text-white hover:bg-coral-600 shadow-md hover:shadow-lg",
        dark: "bg-brand-navy text-white hover:bg-navy-400 shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 rounded-btn",
        sm: "h-9 px-4 rounded-btn text-body-sm",
        lg: "h-[50px] px-7 rounded-btn",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
