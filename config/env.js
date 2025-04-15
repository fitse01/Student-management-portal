import { config } from "dotenv";
// config({path:'.env'})  if single env file
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, DB_URI, NODE_ENV } = process.env;
