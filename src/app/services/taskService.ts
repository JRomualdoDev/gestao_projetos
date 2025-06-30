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

        return reply.status(201).send({ success: 'true' })
    } catch (error) {
        console.log(error)
        return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
    finally {
        client.release()
    }
}

export async function listTaskProjectId(req: any, reply: any) {

    const project_id = req.params.project_id

    const client = await db.connect()

    try {
        const result = await client.query('SELECT * FROM tasks WHERE project_id = $1 ORDER BY created_at DESC', [project_id])

        return reply.status(200).send({
            success: 'true',
            data: result.rows
        })
    } catch (error) {
        console.log(error)
        return reply.status(500).send({ error: 'Erro interno do servidor' })
    }
    finally {
        client.release()
    }
}

export async function updateOneTask(req: any, reply: any) {
    const task_id = req.params.id;
    const updateData = req.body;

    // Remove campos undefined/null
    const fieldsToUpdate = Object.entries(updateData)
        .filter(([key, value]) => value !== undefined && value !== null)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    if (Object.keys(fieldsToUpdate).length === 0) {
        return reply.status(400).send({
            error: 'Nenhum campo para atualizar foi fornecido'
        });
    }

    const client = await db.connect();

    try {
        // Verifica se existe
        const checkTask = await client.query('SELECT * FROM tasks WHERE id = $1', [task_id]);

        if (checkTask.rows.length === 0) {
            return reply.status(404).send({
                error: 'Task não encontrada'
            });
        }

        // Constrói query dinâmica
        const setClause = Object.keys(fieldsToUpdate)
            .filter((key) => key !== 'id')
            .map((key, index) => `${key} = $${index + 2}`)
            .join(', ')

        const values = [...Object.values(fieldsToUpdate)];

        const result = await client.query(
            `UPDATE tasks 
             SET ${setClause}, updated_at = CURRENT_TIMESTAMP
             WHERE id = $1 
             RETURNING *`,
            values
        );

        return reply.status(200).send({
            success: 'true',
            data: result.rows
        });

    } catch (error) {
        console.log('Erro ao atualizar task:', error);
        return reply.status(500).send({
            error: 'Erro interno do servidor'
        });

    } finally {
        client.release();
    }
}

export async function deleteOneTask(req: any, reply: any) {

    const id = req.params.id;

    const client = await db.connect();

    try {
        // Verifica se existe
        const checkTask = await client.query('SELECT * FROM tasks WHERE id = $1', [id]);

        if (checkTask.rows.length === 0) {
            return reply.status(404).send({
                error: 'Task não encontrada'
            });
        }

        const result = await client.query('DELETE FROM tasks WHERE id = $1', [id]);

        return reply.send({
            success: 'true'
        })

    } catch (error) {
        console.log('Erro ao atualizar task:', error);
        return reply.status(500).send({
            error: 'Erro interno do servidor'
        });

    } finally {
        client.release();
    }
}