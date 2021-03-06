import dotenv from 'dotenv';

let env = dotenv.config();

export const configuration = {
    dbIp: env.parsed?.DB_IP,
    dbSchema: env.parsed?.DB_SCHEMA,
    dbUser: env.parsed?.DB_USER,
    dbPass: env.parsed?.DB_PASS,
    hostIp: env.parsed?.HOST_IP,
    hostPort: env.parsed?.HOST_PORT,
    hostUrl: env.parsed?.HOST_URL,
    hostUrlOdin: env.parsed?.HOST_URL_ODIN
}
