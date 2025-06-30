import { db } from "../../config/database.ts";

export async function listAllTasks() {

    const client = await db.connect()

    try {
        const result = await client.query('SELECT * FROM tasks ORDER BY created_at DESC')
        console.log(result.rows)
        return result.rows
    } catch (error) {
        console.log(error)
    }
    finally {
        client.release()
    }
}

export async function newTask(req: any, reply: any) {

    const { title, description, status, priority, project_id } = req.body

    const client = await db.connect()

    try {
        const result = await client.query('INSERT INTO tasks (project_id, title, description, status, priority) VALUES ( $1, $2, $3, $4, $5 )',
            [project_id, title, description, status, priority])

        return reply.status(201).send({ success: true })
    } catch (error) {
        console.log(error)
        return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
    finally {
        client.release()
    }
}
