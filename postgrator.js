import 'dotenv/config';
import Postgrator from 'postgrator';
import pg from 'pg';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function migrate() {
    // Criar cliente PostgreSQL
    const client = new pg.Client({
        host: 'localhost',
        port: 5432,
        database: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
    });

    try {
        // Conectar ao banco
        await client.connect();
        console.log('Conectado ao banco de dados');

        // Criar instância do Postgrator
        const postgrator = new Postgrator({
            migrationPattern: __dirname + '/migrations/*',
            driver: 'pg',
            database: process.env.POSTGRES_DB,
            schemaTable: 'schemaversion',
            execQuery: (query) => client.query(query),
        });

        // Executar migrations
        const appliedMigrations = await postgrator.migrate();
        console.log('Migrations aplicadas:', appliedMigrations);

    } catch (error) {
        console.error('Erro na migration:', error);
        if (error.appliedMigrations) {
            console.log('Migrations aplicadas antes do erro:', error.appliedMigrations);
        }
    } finally {
        // Fechar conexão
        await client.end();
    }
}

migrate();