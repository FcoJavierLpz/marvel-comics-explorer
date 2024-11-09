import md5 from "md5";

export const generateMarvelHash = (timestamp: string, privateKey: string) => {
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;

  return md5(timestamp + privateKey + publicKey).toString();
};
