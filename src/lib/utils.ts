import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
//import { cn } from "@/lib/utils";
//export { cn } from "cn"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
