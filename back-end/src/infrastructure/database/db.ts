import { DataSource } from "typeorm"
import * as dotenv from 'dotenv'
import Posts from "../../domain/posts/Posts";
dotenv.config()
const  {APP_DRIVER, APP_HOST, APP_USERNAME, APP_PASSWORD, APP_DDBB} = process.env;

export const AppDataSource = new DataSource({

    type: 'mysql',
    host: APP_HOST,
    port: 3306,
    username: APP_USERNAME,
    password: APP_PASSWORD,
    database: APP_DDBB,
    synchronize: true,
    logging: true,
    entities: ['src/domain/**/*.ts','src/domain/**/*/*.ts'],
    subscribers: [],
    migrations: ['src/infrastructure/**/*.migration.ts', 'src/domain/**/*/*.migration.ts'],
    migrationsTableName: 'migrations_table'
})
