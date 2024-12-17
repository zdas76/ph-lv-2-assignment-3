import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  saltRounds: process.env.SALTROUNDS,
  access_secret: process.env.ACCESS_SECRET,
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  STORE_ID:process.env.STORE_ID,
  SIGNATURE_KEY:process.env.SIGNATURE_KEY,
  PAYMENT_URL:process.env.PAYMENT_URL,
  PAYMENT_VERIFY_RUL:process.env.PAYMENT_VERIFY_RUL,
};
