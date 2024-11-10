import axios from "axios";
import { generateMarvelHash } from "@/utils/helpers";
import { config } from "../../config";

const ts = new Date().getTime().toString();
const publicKey = config.marvel.publicKey;
const privateKey = config.marvel.privateKey;
const hash = generateMarvelHash(ts, privateKey);

export const marvelApi = axios.create({
  baseURL: config.marvel.baseUrl,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});
