import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string, limit: number = 2) => {
  if (!name) {
    return "NA";
  }
  let result = "";

  if (name.split(" ")[0] === name) {
    return name.charAt(0).toUpperCase() + name.slice(1).charAt(0).toUpperCase();
  }
  name.split(" ").forEach((item) => {
    console.log("result in", result.length, limit);

    if (result.length > limit - 1) return;
    result += item.charAt(0).toUpperCase();
  });

  return result;
};

console.log(getInitials("", 3));
