import 'reflect-metadata';
import * as dotenv from 'dotenv';
import app from './app/routes/app';
import { AppDataSource } from './infrastructure/database/db';

dotenv.config();

async function main() {

    await AppDataSource.initialize();
    const port = 4000;
    app.listen(port, () => {
        console.log(`
            Server is running to: http://localhost:${port}
        `);
    })
}

main();