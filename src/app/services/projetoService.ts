import { db } from "../../config/database.ts";

export async function listarTodosProjetos() {

    const client = await db.connect()

    try {
        const result = await client.query('SELECT * FROM projects ORDER BY created_at DESC')
        console.log(result.rows)
        return result.rows
    } catch (error) {
        console.log(error)
    }
    finally {
        client.release()
    }
}

export async function criarProjeto(req: any, reply: any) {

    const name = req.body.name
    const description = req.body.description

    const client = await db.connect()

    try {
        const result = await client.query('INSERT INTO projects (name, description) VALUES ( $1, $2 )', [name, description])

        return reply.status(201).send({ success: true })
    } catch (error) {
        console.log(error)
    }
    finally {
        client.release()
    }
}
