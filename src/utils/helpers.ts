import md5 from "md5";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const generateMarvelHash = (timestamp: string, privateKey: string) => {
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

  return md5(timestamp + privateKey + publicKey).toString();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
