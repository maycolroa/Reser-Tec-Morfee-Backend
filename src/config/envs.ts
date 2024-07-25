import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),

// MongoDB
  MONGO_URL: get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
  MONGO_USER: get('MONGO_USER').required().asString(),
  MONGO_PASSWORD: get('MONGO_PASSWORD').required().asString(),

  //postgres
  POSTGRES_URL: get('POSTGRES_URL').required().asString(),
  POSTGRES_DB_NAME: get('POSTGRES_DB').required().asString(),
  POSTGRES_USER: get('POSTGRES_USER').required().asString(),
  POSTGRES_PASSWORD: get('POSTGRES_PASSWORD').required().asString(),
}
